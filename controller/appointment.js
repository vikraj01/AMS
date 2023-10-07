const { default: mongoose } = require('mongoose')
const Appointment = require('../model/appointment.model')

const getAppointment = async (req, res, next) => {
  const { id, status } = req.query;
  const role = req.headers?.role;

  const query = {};

  if (role === 'patient') query.patientId = id;
  else if (role === 'doctor') query.doctorId = id;
  if (status == 'false') query.status = false;
  else if (status == 'true') query.status = true;

  console.log(query);
  try {
    // Use Mongoose's populate method to replace patientId and doctorId with user data
    const results = await Appointment.find(query)
      .populate('patientId', 'name email') // Replace 'patientId' with the actual field name in your Appointment schema
      .populate('doctorId', 'name email'); // Replace 'doctorId' with the actual field name in your Appointment schema

    console.log(results);
    res.status(200).json({ data: results }); // 200 OK
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: error.message }); // 500 Internal Server Error
  }
};


const postAppointment = async (req, res, next) => {
  const { user, patient, age, address, symptoms, doctorId, patientId } =
    req.body
  console.log(req.body)
  try {
    const appointment = await Appointment.create({
      user,
      patient,
      age,
      address,
      symptoms,
      doctorId,
      patientId
    })
    res.status(201).json({ appointment }) // 201 Created
  } catch (error) {
    res.status(500).json({ message: error.message }) // 500 Internal Server Error
  }
}

const updateAppointment = async (req, res, next) => {
  const { id, status } = req.body
  try {
    const appointment = await Appointment.findByIdAndUpdate(id, {
      status
    })
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' }) // 404 Not Found
    }
    res.status(200).json({ data: appointment }) // 200 OK
  } catch (error) {
    res.status(500).json({ message: error.message }) // 500 Internal Server Error
  }
}

module.exports = { getAppointment, postAppointment, updateAppointment }
