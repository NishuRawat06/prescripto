import validator from "validator";
import bcrypt from "bcrypt";
import doctorModel from "../models/doctorModel.js";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

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
    console.log(req.body);
    const imagefile = req.file;
    //check for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !address
    ) {
      return res.json({ sucess: false, message: "missing details" });
    }
    //validate email format
    if (!validator.isEmail(email)) {
      return res.json({ sucess: false, message: "please enter a valid email" });
    }
    //validate strong password
    if (password.length < 8) {
      return res.json({
        sucess: false,
        message: "please enter strong password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const imageUpload = await cloudinary.uploader.upload(imagefile.path, {
      resource_type: "image",
    });
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
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    res.json({ sucess: true, message: "Doctor Added" });
  } catch (error) {
    console.log(error);
    res.send({
      sucess: false,
      message: error.message,
    });
  }
};
//API FOR ADMIN LOGIC
const LoginAdmin = (req, res) => {
  try {
    const {email,password}=req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const Token= jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({sucess:true,Token})
    }
    else{
       res.json({sucess:false,message:"invalid credentials"})
    }
  } 
  catch {
    console.log(error);
    res.send({
      sucess: false,
      message: error.message,
    });
  }
};
export{addDoctor,LoginAdmin}