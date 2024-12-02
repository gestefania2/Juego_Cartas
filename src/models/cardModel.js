import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Category from "./categoryModel.js";


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
  },
  player_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }

}, {
  tableName: 'cards',
  timestamps: false
});

export default Card;

Card.belongsTo(Category, {foreignKey: 'category_id'});
Category.hasMany(Card, {foreignKey: 'category_id'});