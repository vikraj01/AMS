const mongoose = require("mongoose");
const { dummyDoctors, dummyUsers } = require("./data");
const Doctor = require("../model/doctor.model");
const User = require("../model/user.model.js"); // Fix the typo in "require"

const connect = async () => {
  await mongoose.connect("mongodb+srv://Vik_ash_raj:root@cluster0.mfral.mongodb.net/DMS");
};

connect()
  .then(() => {
    return Doctor.insertMany(dummyDoctors);
  })
  .then(() => {
    return User.insertMany(dummyUsers);
  })
  .then(() => {
    console.log("Data seeding completed.");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Data seeding error:", error);
  });
