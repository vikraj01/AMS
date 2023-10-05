const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    phoneNo : String,
    password : String,
    dob : Date,
    address : String
})

const User = mongoose.model("User", userSchema)

module.exports = User