const User = require('../model/user.model')
const generateToken = require('../utils/generateToken')

const getProfile = async (req, res, next) => {
  const user = req.user
  return res.status(200).json({ data: user }); // 200 OK
}

const postLogin = async (req, res, next) => {
  const { email, password } = req.body
  console.log(email,password)

  const user = await User.findOne({ email })
  console.log(user)
  if (!user) {
    return res.status(401).json({ message: 'Invalid Email' }); // 401 Unauthorized
  }

  if (user.password === password) {
    const token = generateToken(user._id)

    user.password = undefined
    return res.status(200).json({ data: user, token }); // 200 OK
  } else {
    return res.status(401).json({ message: 'Invalid Password' }); // 401 Unauthorized
  }
}

const updateUserProfile = async (req, res, next) => {
  const { name, email, phoneNo, dob, address, password, imageUrl } = req.body
  console.log(req.body)
  try {
    const user = await User.updateOne({_id:req.user._id}, {
      name: name,
      email: email,
      phoneNo: phoneNo,
      password: password,
      dob: dob,
      address: address,
      imageUrl: imageUrl
    })

    console.log(user)
    return res.status(200).json({ data: user }); // 200 OK
  } catch (error) {
    return res.status(500).json({ message: error.message }); // 500 Internal Server Error
  }
}

const postRegister = async (req, res, next) => {
  const { name, email, phoneNo, dob, address, imageUrl, password } = req.body

  console.log(req.body)
  const user = await User.findOne({ email })
  if (user) {
    return res.status(409).json({ message: 'User Already Registered!' }); // 409 Conflict
  }

  try {
    const newUser = new User({
      name: name,
      email: email,
      phoneNo: phoneNo,
      password: password,
      dob: dob,
      address: address,
      imageUrl: imageUrl
    })

    const registeredUser = await newUser.save()
    registeredUser.password = undefined
    return res.status(201).json({ data: registeredUser }); // 201 Created
  } catch (error) {
    return res.status(500).json({ message: error.message }); // 500 Internal Server Error
  }
}

module.exports = { updateUserProfile, postLogin, getProfile, postRegister }
