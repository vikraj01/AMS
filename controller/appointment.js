const { default: mongoose } = require("mongoose");
const Appointment = require("../model/appointment.model")

const getAppointment = async (req,res,next) => {
    const {doctorId, userId, status} = req.query;

    const query = {};
    if(doctorId)  query.doctorId = doctorId;
    if(userId)  query.userId = userId;
    query.status = status;

    try {
        const results = await Appointment.find(query);
        res.json({results})
    } catch (error) {
        res.json({message:error.message})
    }
}
const postAppointment = async (req,res,next) => {
    const user = req.user._id;
    const patient = req.body.patient;
    const age = req.body.age;
    const address = req.body.address;
    const symptoms = req.body.symptoms;
    const doctorId = mongoose.Types.ObjectId(req.body.doctorId);

    try {
        const appointment = await Appointment.create({user, patient, age, address, symptoms, doctorId});
        res.json({appointment})
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports = {getAppointment, postAppointment}