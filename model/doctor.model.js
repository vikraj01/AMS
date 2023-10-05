const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name : String,
    email : String,
    phoneNo : String,
    password : String,
    dob : Date,
    photo : String,
    degree : String,
    specialization : String,
    registrationNo : String,
    registrationAuthority : String,
    experience : Number,
    address : String
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor