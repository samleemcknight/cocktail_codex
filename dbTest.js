const db = require('./models')
const { Op } = require("sequelize");

// Method for setting multiple associations between a single ingredient
// and multiple cocktails

db.ingredient.findOne({
    where: {
        name: 'gin'
    }
}).then(ingredient => {
    db.cocktail.findAll({
        where: {
            primaryAlcohol: 'gin'
        }
    }).then(cocktails => {
        ingredient.setCocktails(cocktails).then(relationInfo => {
            console.log(`${ingredient.name} relation added to cocktails`)
        })
    })
})


// This is a method to associate all cocktails with 'dark rum' in their recipe
// with the dark rum ingredient. Same can be done with any other substrings

db.ingredient.findOne({
    where: {
        name: 'dark rum'
    }
}).then(ingredient => {
    db.cocktail.findAll({
        where: {
            recipe: {
                [Op.substring]: 'dark rum'
            }
        }
    }).then(cocktails => {
        ingredient.setCocktails(cocktails).then(relationInfo => {
            console.log(`${ingredient.name} relation added to cocktails`)
        })
    })
})

// this is a method to associate multiple ingredients with a single cocktail

db.cocktail.findOne({
    where: {
        name: 'Bloody Mary'
    }
}).then(cocktail => {
    db.ingredient.findAll({
        where: {
            [Op.or]: [
                { name: 'worcestershire sauce' },
                { name: 'tobasco' },
                { name: 'tomato juice' },
                { name: 'lemon juice' },
            ]
        }
    }).then(ingredients => {
        cocktail.setIngredients(ingredients).then(relationInfo => {
            console.log(`${cocktail.name} has ${ingredients.length} ingredients`)
        })
    })
})

// Method for pulling all cocktails from the database associated with a single ingredient

db.ingredient.findOne({
    where: {
        name: 'tequila'
    },
    include: [db.cocktail]
}).then(ingredient => {
    console.log("-----------------------------")
    console.log(`Here are the cocktails that use ${ingredient.name}:`)
    ingredient.cocktails.forEach(el => console.log(el.name))
    console.log("-----------------------------")
})