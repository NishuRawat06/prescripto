 import React from "react";
 import { NavLink } from "react-router-dom";
 import assets from "../assets/assets";
 import { FaBars, FaTimes } from 'react-icons/fa';
 import { useNavigate } from "react-router-dom";
 import { useState } from "react";
export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  const iconclick = () => {
    setIsOpen(!isopen);
  };
  const[showmenu,setshowmenu]=useState(false);
  const[token,settoken]=useState(true);
  const navigate=useNavigate();
  return (
    <div className="flex w-full justify-between items-center py-6">
      <div>
        <img src={assets.logo} alt="" onClick={()=>navigate("/")} />
      </div>
      <div>
        <ul className="hidden xl:flex items-center justify-between w-[300px] ">
          <NavLink to="/">
            <li className="font-medium">Home</li>
          </NavLink>
          <NavLink to="/Alldoctors">
            <li className="font-medium">All doctors</li>
          </NavLink>
          <NavLink to="/About">
            <li className="font-medium">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="font-medium">Contact</li>
          </NavLink>
        </ul>
      </div>
     
      <div>
        {
          token
          ?<div className="flex item-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt=""/>
            <img className="w-2.5" src={assets.dropdown_icon} alt=""/>
            <div className=" absolute top-0 right-0 pt-14 text-base text-gray-500 font-medium text-grey-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={()=>navigate('/Myprofile')} className="hover:text-black cursor-pointer">My profile</p>
                <p onClick={()=>navigate('/Myappointments')} className="hover:text-black cursor-pointer">My appointments</p>
                <p onClick={()=>settoken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
           </div>
           </div>
         : <NavLink to="/Createaccount">
         <button className="hidden md:flex items-center justify-center w-[180px] h-[45px] border-2 rounded-3xl bg-[#6677FF] text-white">
            create account
          </button>
          </NavLink>
        }
      </div>
      <div className="xl:hidden" onClick={iconclick}>
        {isopen ? (
          <FaTimes className="text-3xl cursor-pointer mr-10" />
        ) : (
          <FaBars className="text-3xl cursor-pointer" />
        )}
      </div>
      {isopen && (
        <ul className="flex flex-col items-center justify-around fixed right-0 top-20  bg-black/20 w-full h-[250px] z-50">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Alldoctors">All doctors</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
