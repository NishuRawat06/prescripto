import React, { useContext, useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Appointment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setdocInfo] = useState(null);
  const [docsslot, setdocslot] = useState([]);
  const [slotindex, setslotindex] = useState(0);
  const [slottime, setslottime] = useState("");

  // fetch doctor details
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === id);
    console.log(docInfo);
    setdocInfo(docInfo);
  };

  // generate slots for 7 days
  const getAvailableslots = async () => {
    setdocslot([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        // today’s slots start after current hour or 10AM
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedtime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedtime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setdocslot((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, id]);

  useEffect(() => {
    if (docInfo) getAvailableslots();
  }, [docInfo]);

  if (!docInfo) return null;

  return (
    <div className="mx-auto h-[335px] p-6">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 p-2">
        <div className="bg-[#6677FF] w-[300px] md:w-[270px] h-[250px] rounded-xl">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-62 h-62 rounded-lg object-cover"
          />
        </div>
        <div className="border rounded-xl shadow h-[250x] w-[300px] md:w-[720px] px-8 py-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {docInfo.name} <span className="text-blue-500">✔</span>
          </h2>
          <p className="text-gray-600">
            {docInfo.degree} - {docInfo.speciality}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {docInfo.experience} Years
          </p>
          <p className="mt-2 text-gray-700">{docInfo.about}</p>
          <p className="font-semibold mt-2">Appointment fee: ${docInfo.fees}</p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Booking slots</h3>

        {/* Dates */}
        <div className="flex flex-wrap gap-3 mb-6">
          {docsslot.map((daySlots, idx) => {
            if (idx === 0) return null;
            const date = daySlots[0]?.datetime;
            return (
              <div
                key={idx}
                className={`px-4 py-2 rounded-full cursor-pointer border ${
                  slotindex === idx ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
                onClick={() => setslotindex(idx)}
              >
                <p className="font-medium">
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </p>
                <p>{date.getDate()}</p>
              </div>
            );
          })}
        </div>

        {/* Times */}
        <div className="flex flex-wrap gap-3">
          {docsslot[slotindex]?.map((slot, idx) => (
            <div
              key={idx}
              onClick={() => setslottime(slot.time)}
              className={`px-4 py-2 border rounded-full cursor-pointer ${
                slottime === slot.time
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              {slot.time}
            </div>
          ))}
        </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700">
          Book an appointment
        </button>
      </div>

      {/* Related Doctors */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Related Doctors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 ">
          {doctors
            .filter(
              (doc) =>
                doc.speciality === docInfo.speciality && doc._id !== docInfo._id
            )
            .map((doc) => (
              <div
                onClick={() => navigate(`/Appointment/${doc._id}`)}
                key={doc._id}
                className="rounded-xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="bg-[#EAEFFF]">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-[220px] object-cover rounded-t-xl"
                  />
                </div>

                <div className="bg-white p-4 rounded-b-xl">
                  <div className="text-sm font-semibold text-green-600 mb-1 flex gap-3 items-center">
                    <FaCircle /> Available
                  </div>
                  <div className="text-lg font-bold text-gray-800 text-center">
                    {doc.name}
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    {doc.speciality}
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

export default Appointment;
