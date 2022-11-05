//chatName
//isGroupCHat
//reference to latest message
//users
//group admin

//we use mongoose to create our schema. schema means how the data will gonna look in mongo db database
//with the help of these models monogo db will unserstand how it needs to structure the data inside the database
const mongoose = require("mongoose")

const chatModel = mongoose.Schema({
    chatName: {type: String, trim: true},
    isGroupChat: {type: Boolean, default: false},
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
{
    timestamps: true,
}
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

