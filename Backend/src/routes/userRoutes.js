const express = require('express');
const Router = express.Router;
const isLoggedIn = require('../middlewares/isLoggedIn.js');
const {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    getUserChannels
} = require('../controllers/userController.js');


const router = Router()


router.route('/register').post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(isLoggedIn,logoutUser)
router.route("/:username").get(getUserProfile)
router.get('/:userId/channels', getUserChannels);


module.exports= router