const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

          //To indicate one of the exercise types we are working with, push, pull, legs, or cardio
          muscletype: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
            },

            duration: {
                type: Datatypes.INTEGER,
                allowNull:false,
                unique: false
            },

            currentweek: {
                type: Datatypes.INTEGER,
                allowNull:false,
                unique: false
            },

        //by default I'm setting it up so each muscle type will have five different workouts
        exercise1: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        //the number of repetitions the user will have to do this. Initially, this will come from multiplying the previous week's repetitions by 1.1 or if the first week, a constant like 50 for squats.
        exercise1current: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
//this will represent the total number of repetitions for a given exercise like pushups. This will come from an update query adding the current week's repetitions to the sum of all the previous weeks.
        exercise1total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise2: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },

        exercise2current: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise2total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise3: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },

        exercise3current: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise3total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise4: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },

        exercise4current: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise4total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise5: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },

        exercise5current: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },

        exercise5total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        }



    }
),

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Workout',
  }
  ;
  
  module.exports = Workout;
  
