const config = require('../config.js');
const Schema = config.Schema;

var UsersSchema =  Schema(
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

var USERS = config.mongo.model('Users',UsersSchema,);
module.exports = USERS;
