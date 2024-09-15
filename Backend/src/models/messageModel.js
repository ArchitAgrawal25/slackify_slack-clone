import mongoose from "mongoose";

const messageSchema =new mongoose.Schema({
        channelId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel"
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        message: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Message = mongoose.model("Message",messageSchema)
module.exports = Message;