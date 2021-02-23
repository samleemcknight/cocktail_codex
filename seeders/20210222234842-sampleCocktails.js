'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('cocktails', [{
      name: 'Brandy Alexa',
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
    }], {});
    
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
