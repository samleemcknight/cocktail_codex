const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")

// GET ROUTE - Signup Page
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// POST ROUTE - NEW USER SIGNUP
router.post('/signup', (req, res) => {
  // find or create the user
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      // success
      let message = `Welcome, ${req.body.name}`
      passport.authenticate('local', {
        successRedirect: '/cocktails',
        successFlash: message
      })(req, res)
    } else {
      // user already exists, so we redirect
      req.flash('error', 'Email already exists')
      res.redirect('/signup')
    }
  }).catch(error => {
    // if an error occurs, console log the error message
    req.flash('error', error.message)
    res.redirect('/auth/signup')
  })
})

// GET ROUTES FOR LOGIN PAGE
router.get('/login', (req, res) => {
  res.render('auth/login');
});

// POST ROUTE - EXISTING USER LOGIN 
router.post('/login', passport.authenticate('local', {
  successRedirect: '/cocktails',
  failureRedirect: '/',
  successFlash: 'Welcome back!',
  failureFlash: 'Invalid username and/or password.'
}))

// GET ROUTE FOR LOGOUT PAGE
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success', 'See you later, Sterling Archer!')
  res.redirect('/')
})

module.exports = router;
