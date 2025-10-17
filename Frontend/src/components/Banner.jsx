import React from "react";
import assets from "../assets/assets";
import { NavLink } from "react-router-dom";
export default function Banner(){
    return (
      <div className="w-full bg-[#6677FF] h-[300px] md:h-[600px] lg:h-[450px] rounded-2xl my-4 flex px-10 sm:px-10 lg:px-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
            Book Appointment With 100+ Trusted Doctors
          </div>
          <NavLink to="/Createaccount">
          <div>
            <button className="rounded-3xl w-[150px] h-[45px] bg-white mt-10 text-[#6677FF]">
              Create Account
            </button>
          </div>
          </NavLink>
        </div>
        <div className="w-0 md:w-1/2 flex items-end justify-center ">
          <img
            src={assets.appointment_img}
            className=" max-w-[450px] h-[340] md:h-[400px] mt-5 md:mt-0 hidden md:block"
          />
        </div>
      </div>
    );
}