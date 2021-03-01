const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")
const isLoggedIn = require('../middleware/isLoggedIn')
const { Op } = require('sequelize')

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
    // begins with finding user data so that favorited cocktails will be noted
    db.user.findOne({
        where: {
            email: req.user.dataValues.email
        },
        include: [db.cocktail]
    }).then(user => {
        // declares variables to be used for dynamic search terms
        const result = req.body.searchTerm
        let string = result.split('')
        string[0] = string[0].toUpperCase()
        let capSearch = string.join('')
        
        // searches cocktails and adjusts the search terms to fit the database
        db.cocktail.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.substring]: capSearch } },
                    { primaryAlcohol: { [Op.substring]: result.toLowerCase() } },
                ]
            }
        }).then(cocktails => {
            // if no cocktails are found, it then searches for ingredients in db with that name
            if (typeof cocktails[0] === "undefined") {
                db.ingredient.findOne({
                    where: {
                        name: {
                            [Op.substring]: result.toLowerCase()
                        }
                    },
                    include: [db.cocktail]
                }).then(ingredient => {
                    //if no ingredients are found, it returns an error
                    if (!ingredient) {
                        req.flash('success', `No results found for '${result}'`)
                        res.redirect('/cocktails')
                    }
                    // if ingredients are found, it returns the cocktails associated with those ingredients
                    else {
                        res.render('cocktails/search', { cocktails: ingredient.cocktails, userCocktails: user.cocktails })
                    }
                })
            }
            // if everything is good with the first search, it will return all cocktails 
            else { 
                res.render('cocktails/search', { cocktails: cocktails, userCocktails: user.cocktails })
            }
        })
    })
})

// POST for add to favorites
router.post('/myFavorites', (req, res) => {
    if (typeof req.body.name === "undefined") {
        req.flash('error', 'you didn\'t pick anything!')
        res.redirect('/cocktails')
    }
    else {
    db.user.findOne({
        where: { email: req.user.dataValues.email}
    }).then(user => {
        db.cocktail.findAll({
            where: { name: req.body.name }
        }).then(cocktail => {
                user.addCocktails(cocktail).then(relationInfo => {
                    req.flash('success', 'You have new favorite cocktail(s).')
                    res.redirect('/cocktails')
                })
        })
    })
}
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
                req.flash('success', 'Success! Your creation tastes beautiful.')
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
            res.render('cocktails/edit', {cocktail: cocktail});
        })
    })
});

// PUT ROUTE- EDITS ONE that was shown
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
                        req.flash('success', 'This is pretty different from anything we\'ve seen, so we made it into a new cocktail for you.')
                        res.redirect('/cocktails/myCocktails')
                    })
                })
                
        })
    }
    })
})
module.exports = router;