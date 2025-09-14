import DoctorModel from "../models/doctorModel.js"; 
import validator from "validator";

export const addDoctor=async(req,res)=>{
    try{
        const {name,email, speciality, degree,experience,about,fees,address}=req.body;
        const imagefile=req.file;
        if(!name|| !email|| !password || !speciality || !degree ||!experience ||!about ||!address){
            return res.json({sucess:false,message:"missing details"})
        }
        if(!validator.isEmail(email)){
            return res.json({sucess:false, message:"please enter a valid email"})
        }
    }
    catch(error){
        console.log(error);
        res.send({
            status: "failure",
            msg: "Doctor not created successfully",
        })
    }
}