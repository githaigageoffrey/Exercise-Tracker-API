const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
var Schema = mongoose.Schema;

require('dotenv').config();

const exercisesRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');

module.exports = {
    express,
    cors,
    mongoose,
    exercisesRouter,
    usersRouter
}