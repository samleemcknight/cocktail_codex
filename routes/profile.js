const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")
const isLoggedIn = require('../middleware/isLoggedIn')
const { Op } = require('sequelize')

// PROFILE PAGE GET ROUTE
router.get('/profile', isLoggedIn, (req, res) => {
    db.user.findOne({
        where: { email: req.body.email ,
                name: req.body.name,
                password: req.body.password
            }).then((user) => {res.render('/profile', {
            console.log(user.DataValues)
    }));
        

// // DELETE route for delete user, de-activate account, flash to confirm before redirect

// app.delete('/profile', (req, res) => {
//     res.redirect('logout');
// });
