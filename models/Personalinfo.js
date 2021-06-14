const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Personalinfo extends Model {}

Personalinfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currentWeight:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
        isDecimal: true,
          },
      },
      bmi:{
        
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
          isDecimal: true,
            },
        },
      
      goal:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
        isDecimal: true,
          },
      },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'personalinfo',
    }
);
module.exports = Personalinfo;