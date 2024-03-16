const User = require('../models/userModel');

exports.Home = function (req, res, next) {
  res.status(200).json({
    sucess: true,
    message: 'this is test route',
  });
};

exports.CreateUser = async function (req, res, next) {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.status(201).json({ sucess: true, user: newuser });
  } catch (error) {
    res.status(500).json({ sucess: false, message: error.message });
  }
};
