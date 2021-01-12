const mongo = require('mongoose');

var ExerciseSchema = mongo.Schema(
	{
        username: { type : String,required: true},
        description: { type : String,required: true},
        duration: { type : Number,required: true},
        date: { type : Date,required: true},
	},
	{
		timestamps: true
	}
);

var EXERCISE = mongo.model('Exercise',ExerciseSchema);
module.exports = EXERCISE;