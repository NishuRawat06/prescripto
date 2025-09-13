import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongobd.js";
import connectCloudinary from "./config/cloudinary.js";
dotenv.config();
const app=express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("backend is working");
});
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));