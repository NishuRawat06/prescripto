import React from "react";
import { specialityData } from "../assets/assets"; 
import { Link } from "react-router-dom";
export default function SpecialityMenu(){
    return (
      <div
        id="speciality"
        className=" flex flex-col justify-center items-center py-16 gap-5 px-2 md:px-0"
      >
        <div className="w-[300px] md:w-[310px] h-[50px] text-4xl font-medium mx-auto md:mx-0">
          Find by speciality
        </div>
        <div>
          Simply browse through our extensive list of trusted
          <br /> doctors, schedule your appointment hassle-free.
        </div>
        <div className="flex justify-between items-center gap-3 flex-wrap">
          {specialityData.map((data, index) => (
            <Link
              key={index}
              className="transition-all duration-500 transform hover:-translate-y-2 cursor-pointer flex-shrink-0 snap-start"
              to={`/Alldoctors/${data.speciality}`}
            >
              <img src={data.image} />
              <div className="text-center ">{data.speciality}</div>
            </Link>
          ))}
        </div>
      </div>
    );
}