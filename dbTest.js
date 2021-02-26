const db = require('./models')
const { Op } = require("sequelize");

// Method for setting multiple associations between a single ingredient
// and multiple cocktails

// db.ingredient.findOne({
//     where: {
//         name: 'gin'
//     }
// }).then(ingredient => {
//     db.cocktail.findAll({
//         where: {
//             primaryAlcohol: 'gin'
//         }
//     }).then(cocktails => {
//         ingredient.setCocktails(cocktails).then(relationInfo => {
//             console.log(`${ingredient.name} relation added to cocktails`)
//         })
//     })
// })


// // // This is a method to associate all cocktails with 'dark rum' in their recipe
// // // with the dark rum ingredient. Same can be done with any other substrings

// db.ingredient.findOne({
//     where: {
//         name: 'dark rum'
//     }
// }).then(ingredient => {
//     db.cocktail.findAll({
//         where: {
//             recipe: {
//                 [Op.substring]: 'dark rum'
//             }
//         }
//     }).then(cocktails => {
//         ingredient.setCocktails(cocktails).then(relationInfo => {
//             console.log(`${ingredient.name} relation added to cocktails`)
//         })
//     })
// })

// // this is a method to associate multiple ingredients with a single cocktail

// db.cocktail.findOne({
//     where: {
//         name: 'Bloody Mary'
//     }
// }).then(cocktail => {
//     db.ingredient.findAll({
//         where: {
//             [Op.or]: [
//                 { name: 'worcestershire sauce' },
//                 { name: 'tobasco' },
//                 { name: 'tomato juice' },
//                 { name: 'lemon juice' },
//             ]
//         }
//     }).then(ingredients => {
//         cocktail.setIngredients(ingredients).then(relationInfo => {
//             console.log(`${cocktail.name} has ${ingredients.length} ingredients`)
//         })
//     })
// })

// // Method for pulling all cocktails from the database associated with a single ingredient

// db.ingredient.findOne({
//     where: {
//         name: 'tequila'
//     },
//     include: [db.cocktail]
// }).then(ingredient => {
//     console.log("-----------------------------")
//     console.log(`Here are the cocktails that use ${ingredient.name}:`)
//     ingredient.cocktails.forEach(el => console.log(el.name))
//     console.log("-----------------------------")
// })

// db.cocktail.findAll({
//     where: {
//         [Op.or]: [
//             { name: {[Op.substring]: 'Morgan'} },
//             { primaryAlcohol: 'whiskey' },
//         ],
//     }
// }).then(cocktail => {
//     console.log(cocktail)
// })

// db.user.findOne({
//     where: {
//         email: 'user1@user.com'
//     },
//     include: [db.cocktail]
// }).then(user => {
//     db.cocktail.findAll({
//         where: {
//             id: { [Op.ne]: user.cocktails[0].id },
//             [Op.or]: [
//                 { name: { [Op.substring]: 'vodka' } },
//                 { primaryAlcohol: { [Op.substring]: 'vodka'} },
//             ]
//         }
//     }).then(cocktails => {
//         console.log(cocktails)
//     })
// })

let string = 'morgan'
    // begins with finding user data so that favorited cocktails will be noted
    db.user.findOne({
        where: {
            email: req.user.dataValues.email
        },
        include: [db.cocktail]
    }).then(user => {
        let incompleteSearch = req.body.searchTerm.split('').slice(0, 2)
        let string = req.body.searchTerm.split('')
        string[0] = string[0].toUpperCase()
        let capSearch = string.join('')
        
        db.cocktail.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.substring]: capSearch } }, 
                    { primaryAlcohol: { [Op.substring]: req.body.searchTerm.toLowerCase() } },
                ]
            }
        }).then(cocktails => {
            if (typeof cocktails[0] === "undefined") {
                db.ingredient.findOne({
                    where: {
                        [Op.or]: [
                            { name: { [Op.substring]: req.body.searchTerm.toLowerCase()}},
                            { name: { [Op.startsWith]: incompleteSearch.join('')}}
                        ]
                    },
                    include: [db.cocktail]
                }).then(ingredient => {
                    if (!ingredient) {
                        console.log('No cocktails or ingredients found with those search terms')
                        req.flash('success', 'No results found')
                        res.redirect('/cocktails')
                    }
                    else {
                        console.log(`found ${ingredient.cocktails.length} cocktails associtated with ${string}`)
                        console.log("-----------------------------")
                        console.log(`Here are the cocktails that use ${ingredient.name}:`)
                        ingredient.cocktails.forEach(el => console.log(el.name))
                        console.log("-----------------------------")
                        res.render('cocktails/search', { cocktails: ingredient.cocktails, userCocktails: user.cocktails })
                    }
                })
            }
            else {
                console.log(`found ${cocktails.length} cocktails associtated with ${string}`)
                res.render('cocktails/search', { cocktails: cocktails, userCocktails: user.cocktails })
            }
        })
    })

// db.ingredient.findOne({
//     where: {
//         name: { [Op.substring]: 'kahlua' }
//     },
//     include: [db.cocktail]
// }).then(ingredient => {
//     console.log("-----------------------------")
//     console.log(`Here are the cocktails that use ${ingredient.name}:`)
//     ingredient.cocktails.forEach(el => console.log(el.name))
//     console.log("-----------------------------")
// })