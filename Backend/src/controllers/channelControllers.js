const asyncHandler = require('../utils/asyncHandler.js');
const Channel = require('../models/channelModel.js');
const User = require('../models/userModel.js');

const createChannel = asyncHandler( async (req,res) => {
    const {channelName} = req.body;

    if (!channelName) {
        return res.status(400).json({message: "Channel Name required"})
    }
    if (channelName.length > 50) {
        return res.status(400).json({message: "Channel Name should be under or below 50 characters only"})
    }

    const user = req.cookies.user ;

    const channel = await Channel.create({
        channelName,
        createdBy: user._id,
        users: [user._id]
    }).catch(error => {
        return res.status(500).json({ message: "Error creating channel", error });
    })

    await User.findByIdAndUpdate(
        user._id,
        { $push: {channels: channel._id}}
    ).catch(error => {
        return res.status(500).json({ message: "Error updating user with new channel", error });
    });

    return res
    .status(201)
    .json({
        channel,
        message: "Channel created successfully"
    })

})


const getChannel = asyncHandler( async (req,res) => {
    const {channelId} = req.params
    const channel  =  await Channel.findById(channelId)

    if (!channel) {
        return res.status(404).json({message: "Channel not found"})
    }
    return res.status(200).json({channel, message: "Channel fetched Successfully"})
})


const joinChannel = asyncHandler( async (req,res) => {
    const {userId, channelId} = req.params;
    const user = await User.findById(userId);
    const channel = await Channel.findById(channelId);

    if (!user) {
        return res.status(404).json({message: "user not found"})
    }
    if (!channel) {
        return res.status(404).json({message: "channel not found"})
    }
    if(!user.channels.includes(channelId)) {
        user.channels.push(channelId)
        await user.save()
    }
    if (!channel.users.includes(userId)) {
        channel.users.push(userId)
        await channel.save()
    }
    return res.status(200).json({ message: "Joined channel successfully" });
})


const leaveChannel = asyncHandler( async (req,res) => {
    const {userId, channelId} = req.params;
    const user = await User.findById(userId);
    const channel = await Channel.findById(channelId);

    if (!user) {
        return res.status(404).json({message: "user not found"})
    }
    if (!channel) {
        return res.status(404).json({message: "channel not found"})
    }

    user.channels = user.channels.filter(id => !id.equals(channelId))
    await user.save()

    channel.users = channel.users.filter(id => !id.equals(userId))
    await channel.save()

    return res.status(200).json({ message: "Left channel successfully" });
})


const getChannelUsers = asyncHandler( async (req,res) => {
    const {channelId} = req.params
    const channel = await Channel.findById(channelId).populate('users')

    if (!channel) {
        return res.status(404).json({message: 'channel not found'})
    }
    return res.status(200).json({
        users: channel.users,
        message: "Fetched channel users successfully"
    })
})


module.exports= {createChannel, getChannel, joinChannel, leaveChannel, getChannelUsers}