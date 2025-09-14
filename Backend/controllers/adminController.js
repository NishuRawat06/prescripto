import DoctorModel from "../models/doctorModel.js"; 

export const addDoctor=async(req,res)=>{
    try{
        const {name,email, speciality, degree,experience,about,fees,address}=req.body;
        const imagefile=req.file;
        console.log(name,email, speciality, degree,experience,about,fees,address,imagefile);
        
        const newDoctor = await new DoctorModel({name, email, speciality, degree, experience,about, fees, address, image}).save();
        res.send({
            status: "success",
            msg: "Doctor created successfully",
            newDoctor
        })
    }
    catch(error){
        console.log(error);
        res.send({
            status: "failure",
            msg: "Doctor not created successfully",
        })
    }
}