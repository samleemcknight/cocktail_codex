'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('cocktails', [{
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
      name: 'Black Russian',
      primaryAlcohol: 'vodka',
      recipe: '1.5 oz. vodka, .75 oz. Kahlua, .5 oz. cream',
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
      recipe: '1 oz. vodka, 1 oz. kahlua, 1 oz. bailey's irish cream, 1 oz.cream',
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
  ], {});
    
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
