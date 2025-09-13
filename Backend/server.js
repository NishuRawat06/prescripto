import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongobd.js";
const app=express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("backend is working");
});
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));