const { default: mongoose } = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patient : String,
    age : Number,
    address : String,
    symptoms : String,
    status : {
        type : Boolean,
        default : false
    },
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    doctorid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'doctor'
    }
})

const Appointment = mongoose.model("Appointment", appointmentSchema)

module.exports = Appointment