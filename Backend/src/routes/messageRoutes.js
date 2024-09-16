const express = require('express');
const Router = express.Router;
const isLoggedIn = require('../middlewares/isLoggedIn.js');
const {
    getChannelMessage,
    addMessage,
    deleteMessage,
    updateMessage
} = require('../controllers/messageController.js');

const router = Router()

router.use(isLoggedIn)


router.route("/:channelId/messages").get(getChannelMessage).post(addMessage);
router.route("/:channelId/:messageId").delete(deleteMessage).patch(updateMessage);


module.exports= router