const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")
const isLoggedIn = require('../middleware/isLoggedIn')
const { Op } = require('sequelize')

// ROUTERS COCKTAILS

// GET ROUTE FOR SEARCH PAGE

router.get('/', isLoggedIn, (req, res) => {
    let cocktails = null
    res.render('cocktails/search', {cocktails: cocktails})
});

let searchedCocktails = null
// POST route for search function
router.post('/search', (req, res) => {
    db.cocktail.findAll({
        where: {
            [Op.or]: [
                { name: 
                    {[Op.substring]: req.body.searchTerm}
                 },
                { primaryAlcohol: req.body.searchTerm },
            ]
        }
    }).then(cocktails => {
        searchedCocktails = cocktails
        res.render('cocktails/search', { cocktails: cocktails })
    })
})

// POST for add to favorites
router.post('/myFavorites', (req, res) => {
    
    db.user.findOne({
        where: { email: req.user.dataValues.email}
    }).then(user => {
        
        db.cocktail.findOne({
            where: { name: req.body.name}
        }).then(cocktail => {
            // additionally, in the return searched cocktails, take out the cocktail that was added
            // or somehow render the cocktails in such a way that the added cocktail doesn't appear again
            user.addCocktail(cocktail).then(relationInfo => {
                req.flash('success', 'successfully added')
                res.redirect('/cocktails')
            })
        })
    })
})

// GET ROUTE - list info about specific drink with add to myCocktails functionality 
router.get('/:id', isLoggedIn, (req, res) => {
    res.render('show');
});

// POST ROUTE - when user adds to my favorites from 1Cocktail Get Page
// router.post('/:id', isLoggedIn, (req, res) => {
//     res.redirect('/');
// });

// GET ROUTE - users favorites
router.get('/myCocktails', isLoggedIn, (req, res) => {
    res.render('favorites');
});

// DELETE Route - Deletes one cocktail from users favorites, delete from individual page or main listing of favorites?
router.delete('/myCocktails/:id', (req, res) => {
    res.redirect('/myCocktails');
});

// GET Route- Sam's edit recipe ideas functionality, SHOWS ONE to edit from favorites get route
router.get('/myCocktails/:id', isLoggedIn, (req, res) => {
    res.render('myOneCocktail');
});

// PUT ROUTE- Sam's edit recipe idea, EDITS ONE that was shown
router.put('/myCocktails/edit/:id', isLoggedIn, (req, res) => {
    res.redirect('/myCocktails');
});

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