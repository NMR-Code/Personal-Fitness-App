const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class personalInfo extends Model {}

//for personal info right now I want to not factor in bmi and goal weights although that would make the app more impressive and focus on a hard coded workout routines that can work for anyone. As I look more into the formulas regarding bmi we could add it as a factor in dynamically generating workout routines but we should focus on producing the mvp and later customize workouts to people's data; there are many variables that will complicate things otherwise.
personalInfo.init({
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
    currentWeight: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
        },
    },
    bmi: {

        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
        },
    },

    goal: {
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
    modelName: 'personalInfo',
});
module.exports = personalInfo;