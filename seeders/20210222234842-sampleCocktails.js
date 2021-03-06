'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await db.sequelize.sync({ force: true });
    console.log('All models synced');

    await queryInterface.bulkDelete('cocktails', null, {truncate: true, 
      cascade: true, restartIdentity: true}); 
      
      const bulkCocktails = await queryInterface.bulkInsert('cocktails', [
    {
      name: 'Brandy Alexander',
      primaryAlcohol: 'brandy',
      recipe: '1 oz. brandy, 1 oz. brown crème de cacao, 1 oz. heavy cream',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Moscow Mule',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, .5 oz lime juice, 4 oz. ginger beer, lime wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cpt. Morgan and Sprite',
      primaryAlcohol: 'rum',
      recipe: '2 oz. rum, 1.5 oz sprite',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lemon Drop',
      primaryAlcohol: 'vodka',
      recipe: '1.5 oz lemon vodka, 1oz. grand marnier, 1.5 oz lemon juice, .5 oz orange juice, lemon peel spiral',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Gin and Tonic',
      primaryAlcohol: 'gin',
      recipe: '2 oz. gin, 4 oz. tonic water, 1 lime wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Boilermaker',
      primaryAlcohol: 'whiskey',
      recipe: '1.5 oz. whiskey, 8 oz. ale',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'French Connection',
      primaryAlcohol: 'brandy',
      recipe: '2 oz. brandy, 1 oz. amaretto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sidecar',
      primaryAlcohol: 'cognac',
      recipe: '1.5 oz. cognac, .75 oz. cointreau, .75 oz. lemon juice, lemon twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Gimlet',
      primaryAlcohol: 'gin',
      recipe: '1.25 oz. gin, 1.25 oz. lime juice, lime wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Martini',
      primaryAlcohol: 'gin',
      recipe: '2 oz. gin, .5 oz. vermouth, olive',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dirty Martini',
      primaryAlcohol: 'gin',
      recipe: '2 oz. gin, .5 oz. vermouth, .5 oz. olive brine, olives',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Golden Cadillac',
      primaryAlcohol: 'crème de cacao',
      recipe: '1.5 oz. crème de cacao, .75 oz. galliano, 1.5 oz. heavy cream',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bacardi Cocktail',
      primaryAlcohol: 'rum',
      recipe: '2 oz. bacardi rum, 1 oz. lime juice, .5 oz. grenadine, cherry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cuba Libre',
      primaryAlcohol: 'rum',
      recipe: '2 oz. light rum, 5 oz. cola, lime wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Daiquiri',
      primaryAlcohol: 'rum',
      recipe: '2 oz. light rum, 1 oz. lime juice, .5 oz. plain syrup, lime slice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tequila and Cactus Cooler',
      primaryAlcohol: 'tequila',
      recipe: '1.5 oz. tequila, 1 oz. cactus cooler',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Compadre',
      primaryAlcohol: 'tequila',
      recipe: '2 oz. tequila, 2 oz. grapefruit juice, .5 oz. Campari, 2 oz. club soda, orange twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Matador ',
      primaryAlcohol: 'tequila',
      recipe: '1.5 oz. tequila, 3 oz. pineapple juice, .5 oz. lime juice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Margarita',
      primaryAlcohol: 'tequila',
      recipe: '1.5 oz. tequila, 1 oz. cointreau, 1.5 oz. lime juice, 2 lime wedges, salt',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mexican Madras',
      primaryAlcohol: 'tequila',
      recipe: '1 oz. tequila, 3 oz. cranberry juice, .5 oz. orange juice, .25 oz. lime juice, orange slice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tequila Sunrise',
      primaryAlcohol: 'tequila',
      recipe: '1.5 oz. silver tequila, 6 oz. orange juice, .5 oz. grenadine, 2 oz. club soda',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Bay Breeze',
      primaryAlcohol: 'vodka',
      recipe: '1.5 oz. vodka, 1 oz. cranberry juice, 4 oz. pineapple juice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Black Russian',
      primaryAlcohol: 'vodka',
      recipe: '1.5 oz. vodka, .75 oz. Kahlua',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bloody Mary',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, 4 oz. tomato juice, .5 oz. lemon juice, .25 tbsp. horseraddish, 2 dashes tobasco, 2 dashes worcestershire sauce',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cape Cod',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, 4 oz. cranberry juice, .5 oz. lime juice, lime wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cosmopolitan',
      primaryAlcohol: 'vodka',
      recipe: '1.5 oz. vodka, 1.25 oz. cointreau, 1 oz. lime juice, splash cranberry juice, lemon twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Greyhound',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, 5 oz. grapefruit juice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Screwdriver',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, 4 oz. orange juice, orange slice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sea Breeze',
      primaryAlcohol: 'vodka',
      recipe: '1.5 oz. vodka, 3 oz. grapefruit juice, 2 oz. cranberry juice, lime wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sex on the Beach',
      primaryAlcohol: 'vodka',
      recipe: '1 oz. vodka, 1 oz. peach schnapps, 3 oz. graprefruit juice, 3 oz. cranberry juice, cherry ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vodka and Tonic',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, 3 oz. tonic, 2 lime wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'White Russian',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, 1 oz. kahlua, 1 oz. heavy cream',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alabama Slammer',
      primaryAlcohol: 'whiskey',
      recipe: '1 oz. southern comfort, 1 oz. amaretto, .5 oz. sloe gin, 1 oz. orange juice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Blizzard',
      primaryAlcohol: 'bourbon',
      recipe: '3 oz. bourbon, 1 oz. cranberry juice, .5 oz. lemon juice, 1 oz. simple syrup, lemon slice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Brock\'s Cocktail',
      primaryAlcohol: 'whiskey',
      recipe: '2 oz. canadian whiskey, .5 oz. cointreau, 1 tbsp. simple syrup, 2 dashes bitters',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Godfather',
      primaryAlcohol: 'scotch',
      recipe: '2 oz. scotch, 1 oz. amaretto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Manhattan',
      primaryAlcohol: 'bourbon',
      recipe: '2 oz. bourbon, .75 oz. vermouth, 2 dashes bitters, cherry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mint Julep',
      primaryAlcohol: 'bourbon',
      recipe: '4 oz. bourbon, 1 tbsp. simple syrup, 4 mint leaves',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Old Fashioned',
      primaryAlcohol: 'bourbon',
      recipe: '2.5 oz. bourbon, 2 oz. club soda, 1 sugar cube, 3 dashes bitters, 1 lemon strip, 1 orange slice, 1 cherry ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rob Roy',
      primaryAlcohol: 'scotch',
      recipe: '2.5 oz. scotch, .25 oz. vermouth, 1 dash bitters, 1 cherry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rusty Nail',
      primaryAlcohol: 'scotch',
      recipe: '1.5 oz. scotch, 1 oz. drambuie, lemon twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '7 and 7',
      primaryAlcohol: 'whiskey',
      recipe: '2.5 oz. whiskey, 3 oz. 7-up, lemon twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Whiskey Sour',
      primaryAlcohol: 'bourbon',
      recipe: '2 oz. bourbon, .75 oz. lemon juice, .5 oz. simple syrup, lemon slice, 1 cherry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Campari and Soda',
      primaryAlcohol: 'liqueur',
      recipe: '2 oz. Campari, 2 oz. club soda, orange twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Blackjack',
      primaryAlcohol: 'brandy',
      recipe: '1.5 oz. brandy, 1.5 oz. cold coffee, .75 oz. kirsch, lemon twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Stinger',
      primaryAlcohol: 'brandy',
      recipe: '1.5 oz. brandy, 1.5 oz. white crème de menthe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Banshee',
      primaryAlcohol: 'rum',
      recipe: '1 oz. rum, .75 oz. crème de cacao, .5 oz. crème de banane, 2 oz. cream, 1 banana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hurricane',
      primaryAlcohol: 'rum',
      recipe: '1.5 oz. dark rum, 1 oz. light rum, .5 oz. passion fruit juice, 1.5 oz. orange juice, 1 oz. lime juice, 1 oz. pineapple juice, 1 dash bitters, lime wedge, pineapple wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mojito',
      primaryAlcohol: 'rum',
      recipe: '2 oz. light rum, 3 oz. club soda, 1 oz. lime juice, 1 tbsp. sugar, 6 mint leaves',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Surfer On Acid',
      primaryAlcohol: 'liqueur',
      recipe: '1 oz. jaegermeister, 1 oz. rum, 1 oz. pineapple juice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Fireball and Dr. Pepper',
      primaryAlcohol: 'Whiskey',
      recipe: '1 oz. cinnamon whiskey, 1 oz. dr. pepper',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kamikaze',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, .5 oz. cointreau, .25 oz. lime juice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Melon Ball',
      primaryAlcohol: 'vodka',
      recipe: '1 oz. vodka, 1 oz. midori, 4 oz. orange juice, orange slice, watermelon wedge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salty Dog',
      primaryAlcohol: 'vodka',
      recipe: '2 oz. vodka, 4 oz. grapefruit juice, lemon wedge, salt',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vesper',
      primaryAlcohol: 'gin',
      recipe: '2 oz. gin, .25 oz. vodka, .33 oz. lillet blanc, orange twist',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Brass Monkey',
      primaryAlcohol: 'vodka',
      recipe: '1 oz. vodka, .75 oz. light rum, 4 oz. orange juice, .5 oz. galliano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Love Potion',
      primaryAlcohol: 'vodka',
      recipe: '1.5 oz. lemon vodka, .75 oz. chambord, .75 oz. cranberry juice',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mudslide',
      primaryAlcohol: 'vodka',
      recipe: '1 oz. vodka, 1 oz. kahlua, 1 oz. bailey\'s irish cream, 1 oz.cream',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tom Collins ',
      primaryAlcohol: 'gin',
      recipe: '2 oz. gin, 1 oz. lemon juice, .5 oz. simple syrup, 3 oz. club soda, lemon slice, 1 cherry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Singapore Sling',
      primaryAlcohol: 'gin',
      recipe: '1.5 oz. gin, .75 oz. cherry brandy, .75 oz. benedictine, .75 oz. cointreau, 1 oz. orange juice, .75 oz. lime juice, 2 oz. club soda, pineapple wedge, orange slice, 1 cherry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {returning: true});
  
    // console.log('bulk insert: ', bulkCocktails)

    await queryInterface.bulkDelete('ingredients', null, {
      truncate: true,
      cascade: true, restartIdentity: true
    });

    const bulkIngredients = await queryInterface.bulkInsert('ingredients', [{
      name: 'bourbon',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'brandy',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'whiskey',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'scotch',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'gin',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'light rum',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'dark rum',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tequila',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'vodka',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'vermouth',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'cointreau',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'crème de cacao',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'crème de menthe',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'kahlua',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'pernod',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'amaretto',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'chambord',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'frangelico',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'sambuca',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'cachaca',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'grappa',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'cognac',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'campari',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'dubonet',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'fernet',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'lilet blanc',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'pimms',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'benedectine',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'curacao',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'chartreuse',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'crème de banane',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'drambuie',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'galliano',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'grand marnier',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'irish cream',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'jagermeister',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'maraschino',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'midori',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ouzo',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'peach schnapps',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'southern comfort',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tuaca',
      isAlcohol: 'Y',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'club soda',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'sprite',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '7-up',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ginger ale',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'cola',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'mineral water',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tonic water',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'orange juice',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'cranberry juice',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'grapefruit juice',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tomato juice',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'half-and-half',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'milk',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ginger beer',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'orangina',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'pineapple juice',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'cream of coconut',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'guava',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'passion fruit nectar',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'lychee',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tobasco',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'worcestershire sauce',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'bitters',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'lemon juice',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'lime juice',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'olive brine',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'heavy cream',
      isAlcohol: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], { returning: true });
    // console.log('bulk insert: ', bulkIngredients)
    
    await queryInterface.bulkDelete('cocktailsIngredients', null, {truncate: true,
      cascade: true, restartIdentity: true});
    
    const bulkcocktailsIngredients = await queryInterface.bulkInsert('cocktailsIngredients', [
      {
        cocktailId: bulkCocktails[0].id,
        ingredientId: bulkIngredients[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[1].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[2].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[2].id,
        ingredientId: bulkIngredients[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[3].id,
        ingredientId: bulkIngredients[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[4].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //boilermaker
      {
        cocktailId: bulkCocktails[5].id,    
        ingredientId: bulkIngredients[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //french connection
      {
        cocktailId: bulkCocktails[6].id,
        ingredientId: bulkIngredients[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[6].id,
        ingredientId: bulkIngredients[15].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // sidecar
      {
        cocktailId: bulkCocktails[7].id,
        ingredientId: bulkIngredients[21].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[7].id,
        ingredientId: bulkIngredients[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[7].id,
        ingredientId: bulkIngredients[65].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // gimlet
      {
        cocktailId: bulkCocktails[8].id,
        ingredientId: bulkIngredients[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[8].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // martini
      {
        cocktailId: bulkCocktails[9].id,
        ingredientId: bulkIngredients[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[9].id,
        ingredientId: bulkIngredients[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // dirty martini
      {
        cocktailId: bulkCocktails[10].id,
        ingredientId: bulkIngredients[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[10].id,
        ingredientId: bulkIngredients[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[10].id,
        ingredientId: bulkIngredients[67].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Golden Cadillac
      {
        cocktailId: bulkCocktails[11].id,
        ingredientId: bulkIngredients[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[11].id,
        ingredientId: bulkIngredients[32].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[11].id,
        ingredientId: bulkIngredients[68].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Bacardi Cocktail
      {
        cocktailId: bulkCocktails[12].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[12].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Cuba Libre
      {
        cocktailId: bulkCocktails[13].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[13].id,
        ingredientId: bulkIngredients[46].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Daiquiri
      {
        cocktailId: bulkCocktails[14].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[14].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tequila and Cactus Cooler
      {
        cocktailId: bulkCocktails[15].id,
        ingredientId: bulkIngredients[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Compadre
      {
        cocktailId: bulkCocktails[16].id,
        ingredientId: bulkIngredients[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[16].id,
        ingredientId: bulkIngredients[51].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[16].id,
        ingredientId: bulkIngredients[22].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[16].id,
        ingredientId: bulkIngredients[42].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Matador 
      {
        cocktailId: bulkCocktails[17].id,
        ingredientId: bulkIngredients[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[17].id,
        ingredientId: bulkIngredients[57].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[17].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Margarita
      {
        cocktailId: bulkCocktails[18].id,
        ingredientId: bulkIngredients[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[18].id,
        ingredientId: bulkIngredients[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[18].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Mexican Madras
      {
        cocktailId: bulkCocktails[19].id,
        ingredientId: bulkIngredients[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[19].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[19].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[19].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tequila Sunrise
      {
        cocktailId: bulkCocktails[20].id,
        ingredientId: bulkIngredients[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[20].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[20].id,
        ingredientId: bulkIngredients[42].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Bay Breeze
      {
        cocktailId: bulkCocktails[21].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[21].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[21].id,
        ingredientId: bulkIngredients[57].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Black Russian
      {
        cocktailId: bulkCocktails[22].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[22].id,
        ingredientId: bulkIngredients[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Bloody Mary
      {
        cocktailId: bulkCocktails[23].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[23].id,
        ingredientId: bulkIngredients[63].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[23].id,
        ingredientId: bulkIngredients[62].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[23].id,
        ingredientId: bulkIngredients[52].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[23].id,
        ingredientId: bulkIngredients[65].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Cape Cod
      {
        cocktailId: bulkCocktails[24].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[24].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[24].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Cosmopolitan
      {
        cocktailId: bulkCocktails[25].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[25].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[25].id,
        ingredientId: bulkIngredients[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[25].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Greyhound
      {
        cocktailId: bulkCocktails[26].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[26].id,
        ingredientId: bulkIngredients[51].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Screwdriver
      {
        cocktailId: bulkCocktails[27].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[27].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Sea Breeze
      {
        cocktailId: bulkCocktails[28].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[28].id,
        ingredientId: bulkIngredients[51].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[28].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Sex on the Beach
      {
        cocktailId: bulkCocktails[29].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[29].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[29].id,
        ingredientId: bulkIngredients[51].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[29].id,
        ingredientId: bulkIngredients[39].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Vodka and Tonic
      {
        cocktailId: bulkCocktails[30].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[30].id,
        ingredientId: bulkIngredients[48].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // White Russian
      {
        cocktailId: bulkCocktails[31].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[31].id,
        ingredientId: bulkIngredients[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[31].id,
        ingredientId: bulkIngredients[68].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Alabama Slammer
      {
        cocktailId: bulkCocktails[32].id,
        ingredientId: bulkIngredients[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[32].id,
        ingredientId: bulkIngredients[15].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[32].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Blizzard
      {
        cocktailId: bulkCocktails[33].id,
        ingredientId: bulkIngredients[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[33].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[33].id,
        ingredientId: bulkIngredients[65].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Brock's Cocktail
      {
        cocktailId: bulkCocktails[34].id,
        ingredientId: bulkIngredients[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[34].id,
        ingredientId: bulkIngredients[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[34].id,
        ingredientId: bulkIngredients[64].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Godfather
      {
        cocktailId: bulkCocktails[35].id,
        ingredientId: bulkIngredients[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[35].id,
        ingredientId: bulkIngredients[15].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Manhattan
      {
        cocktailId: bulkCocktails[36].id,
        ingredientId: bulkIngredients[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[36].id,
        ingredientId: bulkIngredients[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[36].id,
        ingredientId: bulkIngredients[64].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Mint Julep
      {
        cocktailId: bulkCocktails[37].id,
        ingredientId: bulkIngredients[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Old fashioned
      {
        cocktailId: bulkCocktails[38].id,
        ingredientId: bulkIngredients[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[38].id,
        ingredientId: bulkIngredients[42].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[38].id,
        ingredientId: bulkIngredients[64].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Rob Roy
      {
        cocktailId: bulkCocktails[39].id,
        ingredientId: bulkIngredients[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Rusty Nail
      {
        cocktailId: bulkCocktails[40].id,
        ingredientId: bulkIngredients[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 7 and 7
      {
        cocktailId: bulkCocktails[41].id,
        ingredientId: bulkIngredients[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[41].id,
        ingredientId: bulkIngredients[44].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Whiskey Sour
      {
        cocktailId: bulkCocktails[42].id,
        ingredientId: bulkIngredients[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[42].id,
        ingredientId: bulkIngredients[65].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Campari and Soda
      {
        cocktailId: bulkCocktails[43].id,
        ingredientId: bulkIngredients[22].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[43].id,
        ingredientId: bulkIngredients[42].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Blackjack
      {
        cocktailId: bulkCocktails[44].id,
        ingredientId: bulkIngredients[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Stinger
      {
        cocktailId: bulkCocktails[45].id,
        ingredientId: bulkIngredients[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Banshee
      {
        cocktailId: bulkCocktails[46].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[46].id,
        ingredientId: bulkIngredients[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[46].id,
        ingredientId: bulkIngredients[30].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[46].id,
        ingredientId: bulkIngredients[68].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Hurricane
      {
        cocktailId: bulkCocktails[47].id,
        ingredientId: bulkIngredients[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[47].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[47].id,
        ingredientId: bulkIngredients[60].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[47].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[47].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[47].id,
        ingredientId: bulkIngredients[57].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[47].id,
        ingredientId: bulkIngredients[64].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Mojito
      {
        cocktailId: bulkCocktails[48].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[48].id,
        ingredientId: bulkIngredients[42].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[48].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Surfer on Acid
      {
        cocktailId: bulkCocktails[49].id,
        ingredientId: bulkIngredients[35].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[49].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[49].id,
        ingredientId: bulkIngredients[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[49].id,
        ingredientId: bulkIngredients[57].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Fireball and Dr. Pepper
      {
        cocktailId: bulkCocktails[50].id,
        ingredientId: bulkIngredients[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[50].id,
        ingredientId: bulkIngredients[46].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Kamikaze
      {
        cocktailId: bulkCocktails[51].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[51].id,
        ingredientId: bulkIngredients[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[51].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Melon Ball
      {
        cocktailId: bulkCocktails[52].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[52].id,
        ingredientId: bulkIngredients[37].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[52].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Salty Dog
      {
        cocktailId: bulkCocktails[53].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[53].id,
        ingredientId: bulkIngredients[51].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Vesper 
      {
        cocktailId: bulkCocktails[54].id,
        ingredientId: bulkIngredients[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[54].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[54].id,
        ingredientId: bulkIngredients[25].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Brass Monkey
      {
        cocktailId: bulkCocktails[55].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[55].id,
        ingredientId: bulkIngredients[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[55].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[55].id,
        ingredientId: bulkIngredients[32].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Love Potion
      {
        cocktailId: bulkCocktails[56].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[56].id,
        ingredientId: bulkIngredients[50].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[56].id,
        ingredientId: bulkIngredients[16].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Mudslide
      {
        cocktailId: bulkCocktails[57].id,
        ingredientId: bulkIngredients[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[57].id,
        ingredientId: bulkIngredients[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[57].id,
        ingredientId: bulkIngredients[34].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[57].id,
        ingredientId: bulkIngredients[68].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[57].id,
        ingredientId: bulkIngredients[53].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tom Collins 
      {
        cocktailId: bulkCocktails[58].id,
        ingredientId: bulkIngredients[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[58].id,
        ingredientId: bulkIngredients[42].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[58].id,
        ingredientId: bulkIngredients[65].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Singapore Sling
      {
        cocktailId: bulkCocktails[59].id,
        ingredientId: bulkIngredients[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[59].id,
        ingredientId: bulkIngredients[27].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[59].id,
        ingredientId: bulkIngredients[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[59].id,
        ingredientId: bulkIngredients[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[59].id,
        ingredientId: bulkIngredients[49].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[59].id,
        ingredientId: bulkIngredients[66].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cocktailId: bulkCocktails[59].id,
        ingredientId: bulkIngredients[42].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true})
    console.log('mapping of ingredients to cocktails: ', bulkcocktailsIngredients)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
