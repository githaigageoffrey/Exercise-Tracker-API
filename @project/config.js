const express = require('express')
const cors = require('cors')
const mongo = require('mongoose')
const connection = mongo.connection;
const db = connection.once('open',()=>{
    console.log("Mongodb successfully established");
});
var Schema = mongo.Schema;

require('dotenv').config();

const exercisesRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');

module.exports = {express,cors,mongo,db,Schema,exercisesRouter,usersRouter}