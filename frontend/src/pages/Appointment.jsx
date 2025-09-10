import React, { useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

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
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
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
    <div className="max-w-5xl mx-auto p-6">
      {/* Doctor Info */}
      <div className="flex gap-6 border rounded-xl shadow p-6">
        <img
          src={docInfo.image}
          alt={docInfo.name}
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div>
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
        <div className="flex gap-3 mb-6">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {doctors
            .filter(
              (doc) =>
                doc.speciality === docInfo.speciality && doc._id !== docInfo._id
            )
            .map((doc) => (
              <div
                key={doc._id}
                className="border rounded-xl shadow p-4 text-center"
                onClick={() => navigate(`/appointment/${doc._id}`)}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <p className="text-green-500 mt-2">● Available</p>
                <h4 className="font-semibold">{doc.name}</h4>
                <p className="text-sm text-gray-500">{doc.speciality}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
