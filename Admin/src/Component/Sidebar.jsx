import React from "react";
import { Admincontext } from "../Context/AdminContext";
import { NavLink } from "react-router-dom";
import home_icon from "../assets/home_icon.svg";
import appointment_icon from "../assets/appointment_icon.svg";
import Add_icon from "../assets/Add_icon.svg";
import people_icon from "../assets/people_icon.svg";
import { useContext } from "react";
export default function Sidebar(){
    const {aToken} = useContext(Admincontext)
    return(
        <div className="min-h-screen bg-white border-r w-64">
            {
                aToken && <ul className="text-[#515151] mt-5">
                    <NavLink to={'/admin-dashboard'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#6677FF]':''}`}>
                        <img src={home_icon} alt=""/>
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink to={'/all-appointments'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#6677FF]':''}`}>
                        <img src={appointment_icon} alt=""/>
                        <p>Appointments</p>
                    </NavLink>
                    <NavLink to={'/add-doctors'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#6677FF]':''}`}>
                        <img src={Add_icon} alt=""/>
                        <p>Add doctors</p>
                    </NavLink>
                    <NavLink to={'/doctors-list'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9  cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#6677FF]':''}`}>
                        <img src={people_icon} alt=""/>
                        <p>Doctors list</p>
                    </NavLink>
                </ul>
            }
        </div>
    )
}