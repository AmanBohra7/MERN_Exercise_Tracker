const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get( (req,res) =>{
    Exercise.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
}  );


router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then( () => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: '+err));

});


router.route('/:id').get( (req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error : '+error));
} );

module.exports = router;