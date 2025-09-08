const express =require('express');
const app=express();
const cors = require("cors");
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("backend is working");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log('server is running on port ${PORT}'));