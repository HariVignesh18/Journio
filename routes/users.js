const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const { storeReturnTo } = require('../middleware');
const user = require('../controllers/user');

router.route('/register')
    .get(user.renderRegister)
    .post(catchAsync(user.newRegister));
router.route('/login')
    .get(user.renderLogin)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), user.newLogin);

router.get('/logout', user.logout); 
module.exports = router;