import validator from "validator";
import bcrypt from "bcrypt";
import doctorModel from "../models/doctorModel.js";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

//ADD DOCTOR 
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imagefile = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !address ||
      !imagefile
    ) {
      return res.json({ success: false, message: "Missing details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Weak password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imagefile.path);
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashpassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    await new doctorModel(doctorData).save();

    res.json({ success: true, message: "Doctor Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ADMIN LOGIN 
const LoginAdmin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
// ALL DOCTORS 
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addDoctor, LoginAdmin, allDoctors };
