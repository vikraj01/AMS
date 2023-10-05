const jwt = require("jsonwebtoken")
const User = require("../model/user.model")
const Doctor = require("../model/doctor.model")

const protect = async(req,res,next) => {
    const apikey = req.body?.api_key;
    if(apikey){
        try {
            const decoded = jwt.verify(apikey, process.env.JWT_SECRET_KEY);
            const role = req.body.role
            if(role == "doctor"){
                req.user = await Doctor.findById(decoded.id).select("-password");
            }else if(role == "user"){
                req.user = await User.findById(decoded.id).select("-password");
            }
            next();
        } catch (error) {
            res.json({message : "Not Authorized"})
        }
    }else{
        res.json({message : "Token Not Found"})
    }
}

module.exports = protect