const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    try {
        // Get all Workouts and JOIN with user data
        const WorkoutData = awaitWorkout.findAll({
            include: [{
                model: User,
                attributes: ['name'],
            }, ],
        });

        // Serialize data so the template can read it
        const Workouts = WorkoutData.map((Workout) => Workout.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            Workouts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/Workout/:id', async(req, res) => {
    try {
        const WorkoutData = awaitWorkout.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['name'],
            }, ],
        });

        const Workout = WorkoutData.get({ plain: true });

        res.render('Workout', {
            ...Workout,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Workout }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;