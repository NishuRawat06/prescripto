import axios from "axios";
import {toast} from "react-toastify";
import { createContext, useState } from "react";
export const Admincontext=createContext();
const AdminContextProvider =(props)=>{
  const [aToken,SetAToken] =useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
  const [doctors,Setdoctors]= useState([])
  const backendurl=import.meta.env.VITE_BACKEND_URL
  const getAllDoctors = async () =>{
       try{
       const{data} =await axios.post(backendurl +'/api/admin/all-doctor',{},{headers:{aToken}})
       if(data.success){
        Setdoctors(data.doctors)
       }else{
        toast.error(data.message)
       }
       }catch(error){
       toast.error(error.message)
       }
  }
    const value ={
      aToken,SetAToken,
      backendurl,doctors,
      getAllDoctors
    }
    return(
        <Admincontext.Provider value={value}>
          {props.children}
        </Admincontext.Provider>
    )
}
export default AdminContextProvider;