const router = require('express').Router();
let Exercises = require('../models/excercise.model');

router.route('/').get((req,res) => {
    Exercises.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error : "+err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
	
    const newExercise = new Exercises({username,description,duration,date});
	console.log(req.body);
    newExercise.save()
    .then(()=> res.json('Exercise saved successfully'))
    .catch(err => res.status(400).json('Error : '+err));
});

router.route('/:id').get((req,res) => {
    Exercises.findById(req.params.id).
    then(exercises => res.json(exercises)).
    catch(err => res.json("Error: "+err));
});

router.route('/:id').delete((req,res) => {
    Exercises.findByIdAndDelete(req.params.id).
    then(() => res.json("Deleted successfully")).
    catch(err => res.json("Error: "+err));
});

router.route('/update/:id').post((req,res) => {
    Exercises.findById(req.params.id).
    then(exercises => {
        exercises.username = req.body.username;
        exercises.description = req.body.description;
        exercises.duration = Number(req.body.duration);
        exercises.date = Date.parse(req.body.date);

        exercises.save().
        then(()=>'Exercise updated .. ').
        catch(err => res.json("Update Error: "+err))
    }).
    catch(err => res.json("Error: "+err));
});

module.exports = router;