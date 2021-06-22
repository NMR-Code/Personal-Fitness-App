const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async(req, res) => {
    try {
        const newWorkout = await Workout.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const WorkoutData = await Workout.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!WorkoutData) {
            res.status(404).json({ message: 'No Workout found with this id!' });
            return;
        }

        res.status(200).json(WorkoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;