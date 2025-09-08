import React,{useContext,useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {AppContext} from "../context/AppContext"
function Appointment(){
    const {docId}=useParams()
    const {doctors}=useContext(AppContext) 
    const [docInfo,setdocInfo]=useState(null)
    const [docsslot,setdocslot]=useState([])
    const[slotindex,setslotindex]=useState(0)
    const[slottime,setslottime]=useState('')
    const fetchDocInfo=async()=>{
     const docInfo=doctors.find(doc=>doc._id===docId)
     setdocInfo(docInfo)
    }
    const getAvailableslots=async()=>{
      setdocslot([])
      let today=new Date()
      for(let i=0;i<7;i++){
        let currentDate=new Date(today)
        currentDate.setDate(today.getDate()+i)
        let endTime=new Date()
        endTime.setDate(today.getDate()+1)
        endTime.setHours(21,0,0,0)
        if(today.getDate()===currentDate.getDate()){
          currentDate.setHours(currentDate.getHours>10?currentDate.getHours()+1:10)
          currentDate.setMinutes(currentDate.setMinutes()>30?30:0)
        }
        else{
          currentDate.setHours(10)
          currentDate.setMinutes(0)
        }
        let timeSlots=[]
        while(currentDate<endTime){
          let formattedtime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
          timeSlots.push({
            datetime:new Date(currentDate),
            time:formattedtime
          })
          currentDate.setMinutes(currentDate.setMinutes()+30)
        }
        setdocslot(prev=>([...prev,timeSlots]))
      }
    }
    useEffect(()=>{
      fetchDocInfo()
    },[doctors,docId])
    useEffect(()=>{
      getAvailableslots()
    },[docInfo])
    useEffect(()=>{
      console.log(docsslot);
    },[docsslot])
return docInfo &&(
  <div>
   <div>
    <div>
      <img src={docInfo.image}/>
    </div>
   </div>
  </div>
)
}
export default Appointment;