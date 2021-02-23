const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")

// ROUTERS COCKTAILS

// GET ROUTE FOR SEARCH
router.get('/', isLoggedIn, (req, res) => {
    res.render('search');
});

// GET ROUTE - list info about specific drink with add to myCocktails functionality 
router.get('/:id', isLoggedIn, (req, res) => {
    res.render('show');
});

// POST ROUTE - when user adds to my favorites from 1Cocktail Get Page
router.post('/:id', isLoggedIn, (req, res) => {
    res.redirect('/cocktails');
});

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