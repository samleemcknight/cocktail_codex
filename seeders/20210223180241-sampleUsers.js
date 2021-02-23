'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      name: "User1",
      email: "user1@user.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "User2",
      email: "user2@user.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
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
