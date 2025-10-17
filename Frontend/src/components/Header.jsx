import React from "react";
import assets from "../assets/assets";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-[#6677FF] rounded-2xl px-10 sm:px-10 lg:px-20 py-10 sm:py-0 h-[790px] sm:h-[710px] md:h-[750px] lg:h-[550px]">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight mx-auto md:mx-0">
          Book Appointment <br /> With Trusted <br /> Doctors
        </h1>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <img
            src={assets.group_profiles}
            alt=""
            className="w-[130px] sm:w-[145px] h-auto"
          />
          <p className="text-white text-center sm:text-left text-sm sm:text-base leading-relaxed max-w-md">
            Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className="bg-white text-[#6677FF] font-medium rounded-3xl w-[190px] h-[45px] flex justify-center items-center gap-2 mt-4 mx-auto md:mx-0">
          Book Appointment <FaLongArrowAltRight />
        </a>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center items-end">
        <img
          src={assets.header_img}
          alt="Header Visual"
          className="w-[100%] md:w-[90%] max-w-[450px] h-[340] md:h-[380px] mt-5 md:mt-0 "
        />
      </div>
    </div>
  );
}
