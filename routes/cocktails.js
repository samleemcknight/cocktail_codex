const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")

// ROUTERS COCKTAILS

// GET ROUTE FOR SEARCH
router.get('/cocktails', isLoggedIn, (req, res) => {
    res.render('search');
});

// GET ROUTE - list info about specific drink with add to myCocktails functionality 
router.get('/cocktails/:id', isLoggedIn, (req, res) => {
    res.render('show');
});

// POST ROUTE - when user adds to my favorites from 1Cocktail Get Page
router.post('/cocktails/:id', isLoggedIn, (req, res) => {
    res.redirect('favorites');
});

// GET ROUTE - users favorites
router.get('/cocktails/myCocktails', isLoggedIn, (req, res) => {
    res.render('favorites');
});

// DELETE Route - Deletes one cocktail from users favorites, delete from individual page or main listing of favorites?
router.delete('/cocktails/myCocktails/:id', (req, res) => {
    res.redirect('favorites');
});

// GET Route- Sam's edit recipe ideas functionality, SHOWS ONE to edit from favorites get route
router.get('/cocktails/myCocktails/:id', isLoggedIn, (req, res) => {
    res.render('myOneCocktail');
});

// PUT ROUTE- Sam's edit recipe idea, EDITS ONE that was shown
router.put('/cocktails/myCocktails/edit/:id', isLoggedIn, (req, res) => {
    res.redirect('myOneCocktail');
});

// BONUS

// SEARCH COCKTAILS BY PRIMARY
// GET ROUTE FOR SEARCH
router.get('/cocktails/prime', isLoggedIn, (req, res) => {
    res.render('searchPrime');
});

// GET ROUTE FOR ONE DRINK SEARCHED
router.get('/cocktails/prime/:id', isLoggedIn, (req, res) => {
    res.render('prime');
});

// POST ROUTE - when user adds to my favorites from 1Cocktail primary alcohol Get Page
router.post('/cocktails/prime/:id', isLoggedIn, (req, res) => {
    res.redirect('favorites');
});









module.exports = router;