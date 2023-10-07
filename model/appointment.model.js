const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: String,
  age: Number,
  address: String,
  symptoms: String,
  status: {
    type: Boolean,
    default: false,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Update to 'User' to match your user model
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Update to 'Doctor' to match your doctor model
  },
}, {
  timestamps: true
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
