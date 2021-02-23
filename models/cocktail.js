'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.cocktail.belongsToMany(models.user, { through: "usersCocktails" })
      models.cocktail.belongsToMany(models.ingredient, { through: "cocktailsIngredients" })
    }
  };
  cocktail.init({
    name: DataTypes.STRING,
    primaryAlcohol: DataTypes.STRING,
    recipe: DataTypes.TEXT,
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'cocktail',
  });
  return cocktail;
};