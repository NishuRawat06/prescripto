import jwt from "jsonwebtoken";
const authAdmin=async(req,res,next)=>{
 try{
    const {atoken}=req.headers
    if(!atoken){
        return res.json({sucess:false,message:'Not Autherized Login Again'})
    }
    const token_decode=jwt.verify(atoken,process.env.JWT_SECRET)
    if(token_decode!== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
        return res.json({sucess:false,message:"Not Autherized Login Again"})
    }
    next();
 }
 catch{
     console.log(error);
    res.send({
      sucess: false,
      message: error.message,
    });
 }
}
export default authAdmin;