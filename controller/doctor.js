const Doctor = require('../model/doctor.model')
const generateToken = require('../utils/generateToken')

const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find().select('-password')
    res.status(200).json({ data: doctors })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const postLogin = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const doctor = await Doctor.findOne({ email })
    if (!doctor) {
      console.log('Doctor not found')
      return res.status(404).json({ message: 'Doctor not found' })
    }
    if (doctor.password === password) {
      const token = generateToken(doctor._id)
      doctor.password = undefined
      return res.status(200).json({ data: doctor, token })
    } else {
      return res.status(401).json({ message: 'Password does not match' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProfile = async (req, res, next) => {
  const doctor = req.user
  return res.status(200).json({ data: doctor })
}

// const updateUserProfile = async (req, res, next) => {
//   const { name, email, phoneNo, dob, address, experience, password } = req.body
//   try {
//     const updatedUser = await Doctor.findByIdAndUpdate(
//       req.user._id,
//       {
//         name: name,
//         email: email,
//         phoneNo: phoneNo,
//         password: password,
//         dob: dob,
//         address: address,
//         experience: experience
//       },
//       { new: true } // To get the updated document
//     )
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'Doctor not found' })
//     }
//     return res.status(200).json({ data: updatedUser })
//   } catch (error) {
//     return res.status(500).json({ message: error.message })
//   }
// }


const updateDoctorProfile = async (req, res, next) => {
  const { name, email, phoneNo, dob, address, password, imageUrl } = req.body
  // const { _id: id } = req.user;
  console.log(req.user._id)
  console.log(req.body)
  try {
    const doctor = await Doctor.updateOne({_id:req.user._id}, {
      name: name,
      email: email,
      phoneNo: phoneNo,
      password: password,
      dob: dob,
      address: address,
      imageUrl: imageUrl
    })

    console.log(doctor)
    return res.status(200).json({ data: doctor }); // 200 OK
  } catch (error) {
    return res.status(500).json({ message: error.message }); // 500 Internal Server Error
  }
}

module.exports = { postLogin, updateDoctorProfile, getProfile, getAllDoctors }
