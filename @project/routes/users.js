const router = require('express').Router();
let user = require('../models/user.model');

router.route('/').get((req,res)=>{
    user.find()
    .then(users=>res.join(users))
    .catch(err => res.status(400).json('Error : '+err));
});