const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name : String,
    email : String,
    phoneNo : String,
    password : String,
    dob : Date,
    imageUrl : String,
    degree : String,
    specialization : String,
    registrationNo : String,
    registrationAuthority : String,
    experience : Number,
    address : String
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor