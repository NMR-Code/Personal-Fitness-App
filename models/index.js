const User = require('./User');
const Workout = require('./Workout');
const Exercise = require('./Exercise');
const Personalinfo = require('./Personalinfo');

User.belongsToMany(Exercise, {
  through: Workout,
  foreignKey: 'user_id',
});

Personalinfo.belongsToMany(User, {
  through: Workout,
  foreignKey: 'exercise_id',
});


Exercise.belongsToMany(User, {
  through: Workout,
  foreignKey: 'exercise_id',
});


module.exports = { User, Workout, Exercise, Personalinfo };

