const User = require("../model/user.model");
const { default: generateToken } = require("../utils/generateToken");

const getProfile = async (req, res, next) => {
    const user = req.user;
    return res.json({ user });
};
const postLogin = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("-password");
    if (!user) {
        console.log("user not found");
        return res.json({ message: "Invalid Email" });
    }
    if (user.password === password) {
        user.token = generateToken(user._id);
        return res.json({ user });
    } else {
        console.log("password not match");
        res.json({ message: "password not match" });
    }
};

const updateUserProfile = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const password = req.body.password;
    const dob = req.body.dob;
    const address = req.body.address;

    const user = await User.updateOne(
        { email },
        {
            name: name,
            email: email,
            phoneNo: phoneNo,
            password: password,
            dob: dob,
            address: address,
        }
    );

    return res.json({ message: "Profile updated successfully" });
};
const postRegister = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const password = req.body.password;
    const dob = req.body.dob;
    const address = req.body.address;

    const user = new User({
        name: name,
        email: email,
        phoneNo: phoneNo,
        password: password,
        dob: dob,
        address: address,
    });
    await user.save();
    console.log(`${user} is registered`);
    return res.json({ user });
};

module.exports = { updateUserProfile, postLogin, getProfile, postRegister };
