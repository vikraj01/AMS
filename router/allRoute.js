const express = require("express")
const userController = require("../controller/user")
const doctorController = require("../controller/doctor")
const appointmentController = require("../controller/appointment")
const protect = require("../middleware/authmiddleware")
const router = express.Router()


router.post("/user-register", userController.postRegister)
router.post("/user-login", userController.postLogin)
router.get("/user-profile",protect, userController.getProfile)
router.put("/update-user", protect, userController.updateUserProfile)

router.get("/doctor-profile", protect, doctorController.getProfile)
router.post("/doctor-login",doctorController.postLogin)
router.put("/doctor-profile",protect, doctorController.updateUserProfile)

router.get("/appointments", protect, appointmentController.getAppointment)
router.post("/appointment", protect, appointmentController.postAppointment)

module.exports = router