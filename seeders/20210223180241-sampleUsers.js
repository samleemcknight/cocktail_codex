'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // clears db so there won't be duplicates after seed
    await queryInterface.bulkDelete('users', null, {truncate: true,
      cascade: true, restartIdentity: true
    });

    const bulkUsers = await queryInterface.bulkInsert('users', [
    {
      name: "User1",
      email: "user1@user.com",
      password: bcrypt.hashSync("password", 12),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "User2",
      email: "user2@user.com",
      password: bcrypt.hashSync("password", 12),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {returning: true});
    console.log("users: ", bulkUsers)
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
