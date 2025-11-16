import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink, useParams } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { doctors } from "../assets/assets";

function Alldoctors() {
  const { speciality } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [filterdoc, setfilterdoc] = useState([]);

  useEffect(() => {
    if (speciality) {
      setfilterdoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterdoc(doctors);
    }
  }, [speciality]);

  return (
    <div className="max-w-[1130px] min-h-screen mx-auto">
      <Navbar />

      {/* FIXED: Sidebar on LEFT for laptops too */}
      <div className="flex flex-col lg:flex-row px-5 py-6 gap-6">

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 xl:w-1/5">
          <h2 className="text-lg font-semibold mb-2">Filter by Speciality</h2>

          {/* Show Filter button only on small screens */}
          <div
            className="lg:hidden w-[100px] h-[35px] bg-slate-400 text-white 
                       flex items-center justify-center rounded cursor-pointer mb-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            Filter
          </div>

          {/* Filter list */}
          <ul
            className={`
              space-y-2 text-gray-700
              ${isOpen ? "block" : "hidden"} 
              lg:block     
            `}
          >
            <li className="border p-2 rounded hover:bg-gray-100 cursor-pointer">
              <NavLink to="/Alldoctors/General physician">General physician</NavLink>
            </li>

            <li className="border p-2 rounded hover:bg-gray-100 cursor-pointer">
              <NavLink to="/Alldoctors/Gynecologist">Gynecologist</NavLink>
            </li>

            <li className="border p-2 rounded hover:bg-gray-100 cursor-pointer">
              <NavLink to="/Alldoctors/Dermatologist">Dermatologist</NavLink>
            </li>

            <li className="border p-2 rounded hover:bg-gray-100 cursor-pointer">
              <NavLink to="/Alldoctors/Pediatricians">Pediatricians</NavLink>
            </li>

            <li className="border p-2 rounded hover:bg-gray-100 cursor-pointer">
              <NavLink to="/Alldoctors/Neurologist">Neurologist</NavLink>
            </li>

            <li className="border p-2 rounded hover:bg-gray-100 cursor-pointer">
              <NavLink to="/Alldoctors/Gastroenterologist">Gastroenterologist</NavLink>
            </li>
          </ul>
        </div>

        {/* Doctor Grid */}
        <div className="w-full lg:w-3/4 xl:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterdoc.map((data) => (
            <div
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
                <div className="text-sm font-semibold text-green-600 mb-1 flex gap-2 items-center">
                  <FaCircle className="text-green-500 text-xs" /> Available
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

      </div>

      <Footer />
    </div>
  );
}

export default Alldoctors;
