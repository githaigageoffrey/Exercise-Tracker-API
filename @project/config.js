const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
var Schema = mongoose.Schema;

require('dotenv').config();

module.exports = {
    express,
    cors,
    mongoose
}