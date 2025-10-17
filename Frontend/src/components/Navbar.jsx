 import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);      // mobile nav
  const [showProfile, setShowProfile] = useState(false); // profile dropdown
  const [token, settoken] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-between items-center py-6 relative">
      {/* Logo */}
      <div>
        <img
          src={assets.logo}
          alt="logo"
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop menu */}
      <ul className="hidden xl:flex items-center justify-between w-[300px]">
        <NavLink to="/"><li className="font-medium">Home</li></NavLink>
        <NavLink to="/Alldoctors"><li className="font-medium">All doctors</li></NavLink>
        <NavLink to="/About"><li className="font-medium">About</li></NavLink>
        <NavLink to="/Contact"><li className="font-medium">Contact</li></NavLink>
      </ul>

      {/* Profile / create account */}
      <div className="relative">
        {token ? (
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setShowProfile((prev) => !prev)} // toggle on click
          >
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />

            {/* Dropdown */}
            <div
              className={`absolute top-12 right-0 min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 text-base text-gray-500 font-medium z-20
                ${showProfile ? "block" : "hidden"} group-hover:block`}
            >
              <p
                onClick={() => navigate("/Myprofile")}
                className="hover:text-black cursor-pointer"
              >
                My profile
              </p>
              <p
                onClick={() => navigate("/Myappointments")}
                className="hover:text-black cursor-pointer"
              >
                My appointments
              </p>
              <p
                onClick={() => settoken(false)}
                className="hover:text-black cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <NavLink to="/Createaccount">
            <button className="hidden md:flex items-center justify-center w-[180px] h-[45px] border-2 rounded-3xl bg-[#6677FF] text-white">
              Create account
            </button>
          </NavLink>
        )}
      </div>

      {/* Mobile icon */}
      <div className="xl:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        {isopen ? (
          <FaTimes className="text-3xl cursor-pointer mr-10" />
        ) : (
          <FaBars className="text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile menu */}
      {isopen && (
        <ul className="flex flex-col items-center justify-around fixed right-0 top-20 bg-black/20 w-full h-[250px] z-50">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Alldoctors">All doctors</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      )}
    </div>
  );
}
