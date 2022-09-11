const mongoose = require("mongoose")
const User = mongoose.Schema

const userSchema = new User({

    userName: {
      type:  String, 
    required: true, 
    lowercase: true
    }
})

module.exports = mongoose.model("User", userSchema)