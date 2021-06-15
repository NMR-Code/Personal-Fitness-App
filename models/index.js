const User = require('./User');
/* const Workout = require('./Workout2'); */
const Workout = require('./Workout');
const Personalinfo = require('./Personalinfo');

User.belongsToMany(Workout, {
  through: Workout,
  foreignKey: 'user_id',
});

Personalinfo.belongsToMany(User, {
  through: Workout,
  foreignKey: 'exercise_id',
});


Workout.belongsToMany(User, {
  through: Workout,
  foreignKey: 'exercise_id',
});


module.exports = { User, Workout,  Personalinfo };

