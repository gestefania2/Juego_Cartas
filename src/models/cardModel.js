const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./categoryModel');

const Card = sequelize.define('Card', {
  card_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('answer', 'question'),
    allowNull: false
  }
  
}, {
  tableName: 'cards',
  timestamps: false
});

export default Card;

Card.belongsTo(Category, {foreignKey: 'category_id'});
Category.hasMany(Card, {foreignKey: 'category_id'});