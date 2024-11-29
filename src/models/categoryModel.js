const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  category_description: {
    type: DataTypes.STRING(400),
    allowNull: false
  }

}, {
    tableName: 'category',
    timestamps: false
  });

export default Category;