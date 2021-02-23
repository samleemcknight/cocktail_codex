'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredients', [{
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
      name: 'Bitters',
      isAlcohol: 'N',
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
