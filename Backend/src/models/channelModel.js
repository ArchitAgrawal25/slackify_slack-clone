import mongoose from "mongoose";

const channelSchema =new mongoose.Schema({
        channelName: {
            type: String,
            required: true,
        },
        createdBy: {
            type: String,
            require: true,
        },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
    },
    {
        timestamps: true
    }
)

const Channel = mongoose.model("Channel", channelSchema)
module.exports = Channel;