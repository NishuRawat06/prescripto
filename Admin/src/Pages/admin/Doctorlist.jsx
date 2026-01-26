import React,{useContext,useEffect} from "react";
import { Admincontext } from "../../Context/AdminContext";
export default function Doctorlist(){
    const {doctors,aToken,getAllDoctors} = useContext(Admincontext)
    useEffect(() => {
        if(aToken){
            getAllDoctors()
        }
    },[aToken])
    
    return(
        <div>
            <h1>All Doctors</h1>
           <div>
        {doctors.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" width="100" />
            <p>{item.name}</p>
            <p>{item.speciality}</p>
          </div>
        ))}
      </div>
        </div>
    )
}