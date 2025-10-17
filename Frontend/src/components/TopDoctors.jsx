import React, { useContext } from "react";
import { doctors } from "../assets/assets";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Alldoctors from"../pages/Alldoctors";
export default function TopDoctors() {
  const navigate=useNavigate();
  const {doctors}=useContext(AppContext);
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold text-center my-4">
        Top Doctors To Book
      </div>
      <div className="text-center text-gray-600 mb-6">
        Simply browse through our extensive list of trusted
        <br /> doctors.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 ">
        {doctors.slice(0, 10).map((data) => (
          <div
            onClick={()=>navigate(`/Appointment/${data._id}`)}
            key={data._id}
            className="rounded-xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="bg-[#EAEFFF]">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-[220px] object-cover rounded-t-xl"
              />
            </div>

            <div className="bg-white p-4 rounded-b-xl">
              <div className="text-sm font-semibold text-green-600 mb-1 flex gap-3 items-center">
                <FaCircle /> Available
              </div>
              <div className="text-lg font-bold text-gray-800 text-center">
                {data.name}
              </div>
              <div className="text-sm text-gray-500 text-center">
                {data.speciality}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="rounded-3xl w-[100px] h-[45px] bg-slate-300 mt-10" onClick={()=>navigate(`/Alldoctors`)}>
          more
        </button>
      </div>
    </div>
  );
}
