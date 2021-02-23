const db = require('./models')
const { Op } = require("sequelize");

db.ingredient.findOne({
    where: {
        name: 'bourbon'
    }
}).then(ingredient => {
    db.cocktail.findAll({
        where: {
            primaryAlcohol: 'bourbon'
        }
    }).then(cocktails => {
        ingredient.setCocktails(cocktails).then(relationInfo => {
            console.log(`${ingredient.name} relation added to cocktails`)
        })
    })
})

db.ingredient.findOne({
    where: {
        name: 'brandy'
    }
}).then(ingredient => {
    db.cocktail.findAll({
        where: {
            primaryAlcohol: 'brandy'
        }
    }).then(cocktails => {
        ingredient.setCocktails(cocktails).then(relationInfo => {
            console.log(`${ingredient.name} relation added to cocktails`)
        })
    })
})

db.ingredient.findOne({
    where: {
        name: 'vodka'
    }
}).then(ingredient => {
    db.cocktail.findAll({
        where: {
            primaryAlcohol: 'vodka'
        }
    }).then(cocktails => {
        ingredient.setCocktails(cocktails).then(relationInfo => {
            console.log(`${ingredient.name} relation added to cocktails`)
        })
    })
})

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

db.ingredient.findOne({
    where: {
        name: 'light rum'
    }
}).then(ingredient => {
    db.cocktail.findAll({
        where: {
            primaryAlcohol: 'rum'
        }
    }).then(cocktails => {
        ingredient.setCocktails(cocktails).then(relationInfo => {
            console.log(`${ingredient.name} relation added to cocktails`)
        })
    })
})

db.ingredient.findOne({
    where: {
        name: 'light rum'
    }
}).then(ingredient => {
    db.cocktail.findAll({
       where: {
           recipe: {
               [Op.substring]: 'light rum'
           }
       }
    }).then(cocktails => {
        ingredient.setCocktails(cocktails).then(relationInfo => {
            console.log(`${ingredient.name} relation added to cocktails`)
        })
    })
})

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