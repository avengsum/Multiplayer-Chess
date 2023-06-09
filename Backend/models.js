const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password: {
    type: String,
    required: true
  },
})

const RoomScheme = new mongoose.Schema({
    CreatorName:{
        type:String,
        required:true,
    },
    RoomName:{
        type:String,
        required:true,
    },
    RoomDescription:{
        type:String,
        required:true
    }
})

const RoomModel = mongoose.model("Room",RoomScheme)

const User = mongoose.model("User",UserScheme)

module.exports = User;
module.exports = RoomModel;