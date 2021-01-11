const config = require('../config.js');
const Schema = config.Schema;

var ExerciseSchema = new Schema(
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

var EXERCISE = config.mongoose.model('Exercise',ExerciseSchema);
module.exports = EXERCISE;