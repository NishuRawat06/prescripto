import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongobd.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./Routes/adminRoute.js";
import morgan from "morgan";
dotenv.config();
//app congig
const app=express();
connectCloudinary();
const PORT = process.env.PORT || 5000;
connectDB();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan("dev")); 
//api endpoint
app.use('/api/admin',adminRouter)
app.get("/",(req,res)=>{
    res.send("backend is working");
});
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));