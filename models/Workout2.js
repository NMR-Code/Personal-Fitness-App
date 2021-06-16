//Commenting out this code to keep it in case but I made another model with objects and sequelize properties for the different exercises and their aspects where exercise.js was, now called workout.js

/* const { Model, DataTypes } = require('sequelize');
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
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
        }
      
    },
    exercise_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'exercise',
        key: 'id'
        }
    },

    workoutDate:{
      type:DataTypes.DATE,
      
    },

    workDuration:{

    },

    exerciseSet:{

    },

   
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'workout',
}
);

module.exports = Workout;
 */