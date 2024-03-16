const express = require('express');
const user = require('../models/userModel');
const router = express.Router();

const {Home, CreateUser}= require("../controlles/userControllers")


router.get('/', Home);

router.post('/create', CreateUser);

module.exports = router