import{ DataTypes } from'sequelize';
import sequelize from '../config/sequelize.js';

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
  },
  player_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  }
}, {
    tableName: 'category',
    timestamps: false
  });

export default Category;