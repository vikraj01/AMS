const Doctor = require("../model/doctor.model")

const postLogin = async (req, res, next) => {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email }).select("-password");
    if (!doctor) {
        console.log("doctor not found");
        return res.json({ message: "Invalid Email" });
    }
    if (doctor.password === password) {
        doctor.token = generateToken(doctor._id);
        return res.json({ doctor });
    } else {
        console.log("password not match");
        return res.json({ message: "password not match" });
    }
};

const getProfile = async (req, res, next) => {
    const doctor = req.user;
    return res.json({ doctor });
};

const updateUserProfile = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const password = req.body.password;
    const dob = req.body.dob;
    const address = req.body.address;
    const experience = req.body.experience;

    const user = await Doctor.updateOne(
        { email },
        {
            name: name,
            email: email,
            phoneNo: phoneNo,
            password: password,
            dob: dob,
            address: address,
            experience : experience,
        }
    );

    return res.json({ message: "Profile updated successfully" });
};

module.exports = {postLogin, updateUserProfile, getProfile}