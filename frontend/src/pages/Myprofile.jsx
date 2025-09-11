// import React, { useState } from "react";
// import assets from "../assets/assets";
// import Navbar from "../components/Navbar";
// function Myprofile(){
//   const[isedit,setisedit]=useState(true);
//   const[userdata,setuserdata]=useState({
//     name:"Edward Vicent",
//     image:assets.profile_pic,
//     email:'richardjameswap@gmail.com',
//     phone:'+1 123 456 7890',
//     adress:{
//       line1:"57th cross ,Richmod",
//       line2:"circle,church Road, London"
//     },
//     gender:'Male',
//     dob:'2000-01-20'
//   })
// return(
//   <div>
//     <Navbar/>
//    <img src={userdata.image} alt=""/>
//    {
//     isedit?<input type="text" value={userdata.name} onChange={e=>setuserdata(prev=>({...prev,name:e.target.value}))}/>
//     :<p>{userdata.name}</p>
//    }
//    <hr/>
//    <div>
//     <p>Contact Information</p>
//     <div>
//       <p>Email id:</p>
//       <p>{userdata.email}</p>
//       <p>Phone :</p>
//       {
//         isedit?<input type="text" value={userdata.phone} onChange={}/>
//       }
//     </div>
//    </div>
//   </div>
// )
// }
// export default Myprofile;
import react from "react";
export default function Myprofile(){
    return(
        <div>
            profiles
        </div>
    )
}