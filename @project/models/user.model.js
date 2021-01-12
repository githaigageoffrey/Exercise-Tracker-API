//const config = require('../config.js');
const mongo = require('mongoose');
//const Schema = mongo.Schema;

var UsersSchema = mongo.Schema(
	{
		username: { 
            type : String,
            required: true,
            unique: true,
            trim: true,
            minlength:3
        },
	},
	{
		timestamps: true
	}
);

var USERS = mongo.model('Users',UsersSchema,);
module.exports = USERS;
