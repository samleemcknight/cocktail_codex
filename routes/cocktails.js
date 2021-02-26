const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")
const isLoggedIn = require('../middleware/isLoggedIn')
const { Op } = require('sequelize')

// ROUTERS COCKTAILS

// GET ROUTE FOR SEARCH PAGE
let searchedCocktails = null

router.get('/', isLoggedIn, (req, res) => {
    let cocktails = searchedCocktails
    
    db.user.findOne({
        where: {
            email: req.user.dataValues.email
        },
        include: [db.cocktail]
    }).then(user => {
            res.render('cocktails/search', {cocktails: cocktails, userCocktails: user.cocktails})
    })
});

// POST route for search function
router.post('/search', (req, res) => {

    db.user.findOne({
        where: {
            email: req.user.dataValues.email
        },
        include: [db.cocktail]
    }).then(user => {
        db.cocktail.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.substring]: req.body.searchTerm } },
                    { primaryAlcohol: { [Op.substring]: req.body.searchTerm } },
                ]
            }
        }).then(cocktails => {
            console.log("what have we here?", cocktails)
            if (typeof cocktails[0] === "undefined") {
                req.flash('success', 'No results found')
                res.redirect('/cocktails')
            } else {
                    // searchedCocktails = cocktails
                    res.render('cocktails/search', { cocktails: cocktails, userCocktails: user.cocktails })
            }
        })
    })
})

// POST for add to favorites
router.post('/myFavorites', (req, res) => {
    
    db.user.findOne({
        where: { email: req.user.dataValues.email}
    }).then(user => {
        db.cocktail.findAll({
            where: { name: req.body.name }
        }).then(cocktail => {
            // additionally, in the return searched cocktails, take out the cocktail that was added
            // or somehow render the cocktails in such a way that the added cocktail doesn't appear again
            user.addCocktails(cocktail).then(relationInfo => {
                req.flash('success', 'successfully added')
                res.redirect('/cocktails')
            })
        })
    })
})


// GET ROUTE - user's favorites
router.get('/myCocktails', isLoggedIn, (req, res) => {
    
    db.user.findOne({
        where: {
            email: req.user.dataValues.email
        },
        include: [db.cocktail]
    }).then(user => {
        
        res.render('cocktails/favorites', {cocktails: user.cocktails})
    })
});

// DELETE Route - Deletes cocktails from users favorites, delete from individual page or main listing of favorites?
router.delete('/myCocktails', (req, res) => {
    db.user.findOne({
        where: {
            email: req.user.dataValues.email
        },
        include: [db.cocktail]
    }).then(user => {
        user.removeCocktails(req.body.id).then(relationInfo => {
            res.redirect('/cocktails/myCocktails')
        })
    })
});

// route for creating a new, custom cocktail
router.get('/create', isLoggedIn, (req, res) => {
    res.render('cocktails/create')
})

router.post('/create', isLoggedIn, (req, res) => {
    db.cocktail.create({
        name: req.body.name,
        primaryAlcohol: req.body.primaryAlcohol,
        recipe: req.body.recipe,
        url: req.body.url,
    }).then(newCocktail => {
        db.user.findOne({ where: { email: req.user.dataValues.email } }).then(user => {
            user.addCocktail(newCocktail).then(relationInfo => {
                req.flash('success', 'Success! Your creation is beautiful')
                res.redirect('/cocktails/myCocktails')
            })
        })

    })
})

router.get('/myCocktails/:id', isLoggedIn, (req, res) => {
    db.usersCocktails.findOne({
        where: {
            cocktailId: req.params.id,
            userId: req.user.dataValues.id
        }
    })
    .then(data => {
        db.cocktail.findOne({
            where: {
                id: data.cocktailId
            }
        }).then(cocktail => {
            console.log(cocktail)
            res.render('cocktails/show', {cocktail: cocktail});
        })
    })
})


// GET Route- edit cocktail recipes view
router.get('/myCocktails/edit/:id', isLoggedIn, (req, res) => {
    db.usersCocktails.findOne({
        where: {
            cocktailId: req.params.id,
            userId: req.user.dataValues.id
        }
    })
    .then(data => {
        db.cocktail.findOne({
            where: {
                id: data.cocktailId
            }
        }).then(cocktail => {
            console.log(cocktail)
            res.render('cocktails/edit', {cocktail: cocktail});
        })
    })
});



// PUT ROUTE- Sam's edit recipe idea, EDITS ONE that was shown
router.put('/myFavorites/:id', isLoggedIn, (req, res) => {
    db.cocktail.findOne({
        where: {
            name: req.body.name
        }
    }).then(cocktail => {
        if (cocktail) {
            cocktail.update({
                name: req.body.name,
                primaryAlcohol: req.body.primaryAlcohol,
                recipe: req.body.recipe,
                url: req.body.url,
            }).then(updateinfo => {
                req.flash('success', 'Edited!')
                res.redirect('/cocktails/myCocktails')
            })
        } else if (!cocktail) {
            db.cocktail.create({
                name: req.body.name,
                primaryAlcohol: req.body.primaryAlcohol,
                recipe: req.body.recipe,
                url: req.body.url,
            }).then(newCocktail => {
                db.user.findOne({where: {email: req.user.dataValues.email}}).then(user => {
                    user.addCocktail(newCocktail).then(relationInfo => {
                        req.flash('success', 'This is pretty different from anything we\'ve seen, so we made it into a new cocktail for you')
                        res.redirect('/cocktails/myCocktails')
                    })
                })
                
        })
    }
    })
})
// BONUS

// SEARCH COCKTAILS BY PRIMARY
// GET ROUTE FOR SEARCH
router.get('/prime', isLoggedIn, (req, res) => {
    res.render('searchPrime');
});

// GET ROUTE FOR ONE DRINK SEARCHED
router.get('/prime/:id', isLoggedIn, (req, res) => {
    res.render('prime');
});

// POST ROUTE - when user adds to my favorites from 1Cocktail primary alcohol Get Page
router.post('/prime/:id', isLoggedIn, (req, res) => {
    res.redirect('/myCocktails');
});









module.exports = router;