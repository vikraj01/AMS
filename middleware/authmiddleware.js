const jwt = require('jsonwebtoken')
const User = require('../model/user.model')
const Doctor = require('../model/doctor.model')

const protect = async (req, res, next) => {
  const token = req.headers?.token
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const role = req.headers?.role
      res.role = role;
      if (role == 'doctor') {
        req.user = await Doctor.findById(decoded.userId).select('-password')
      } else if (role == 'patient') {
        req.user = await User.findById(decoded.userId).select('-password')
      } else {
        return res.json({ message: 'Role not found!' })
      }
      next()
    } catch (error) {
      res.json({ message: error.message })
    }
  } else {
    res.json({ message: 'Token Not Found' })
  }
}

module.exports = protect
