const express = require('express');
const Router = express.Router;
const isLoggedIn = require('../middlewares/isLoggedIn.js');
const {
    createChannel,
    getChannel,
    joinChannel,
    leaveChannel,
    getChannelUsers
} = require('../controllers/channelControllers.js');

const router = Router()

router.use(isLoggedIn)

router.route("/").post(createChannel);
router.route("/:channelId").get(getChannel);
router.post('/:userId/:channelId/join', joinChannel);
router.post('/:userId/:channelId/leave', leaveChannel);
router.get('/:channelId/users', getChannelUsers);


module.exports= router