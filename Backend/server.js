import express from "express";
import cors from "cors";
import 'dotenv/config';
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("backend is working");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));