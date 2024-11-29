const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
  player_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  player_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  custom_categories: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  custom_cards: {
    type: DataTypes.ENUM('custom_answer', 'custom_question'),
    allowNull: true
  }

}, {
  tableName: 'players',
  timestamps: false
});

export default Player;