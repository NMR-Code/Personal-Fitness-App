const User = require('./User');
/* const Workout = require('./Workout2'); */
const Workout = require('./Workout');
const Personalinfo = require('./Personalinfo');

User.hasMany(Workout, {
    foreignKey: 'user_id',
});

Workout.belongsTo(User, {
    through: Workout,
    foreignKey: 'exercise_id',
});

User.hasMany(Personalinfo, {
    through: User,
    foreignKey: 'user_id',
});

Personalinfo.belongsToMany(User, {
    through: Workout,
    foreignKey: 'exercise_id',
});



module.exports = { User, Workout, Personalinfo };