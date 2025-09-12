import React, { useState } from "react";
import assets from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Myprofile() {
  const [isedit, setisedit] = useState(true);
  const [userdata, setuserdata] = useState({
    name: "Edward Vicent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    adress: {
      line1: "57th cross ,Richmod",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  return (
    <div>
      <Navbar />
      <div className="max-w-lg  flex flex-col gap-2 text-sm">
      <img src={userdata.image} alt="" className="w-36 rounded" />
      {isedit ? (
        <input
          type="text"
          value={userdata.name}
          onChange={(e) =>
            setuserdata((prev) => ({ ...prev, name: e.target.value }))
          }
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userdata.name}</p>
      )}
      <hr  className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 underline mt-3">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userdata.email}</p>
          <p className="font-medium">Phone :</p>
          {isedit ? (
            <input
              type="text"
              value={userdata.phone}
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="bg-gray-100 max-w-52"
            />
          ) : (
            <p className="text-blue-400">{userdata.phone}</p>
          )}
          <p className="font-medium">Address :</p>
          {isedit ? (
            <input
              type="text"
              value={userdata.adress.line1}
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, adress:{ ...prev.adress, line1: e.target.value} }))
              }
              className="bg-gray-100 max-w-52"
            />
          ) : (
            <p className="text-gray-500">{userdata.adress.line1}</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isedit ? (
            <select
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
          ) : (
            <p>{userdata.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isedit ? (
            <input
              type="date"
              value={userdata.dob}
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p>{userdata.dob}</p>
          )}
        </div>
      </div>
      <div>
        {
          isedit?<button onClick={()=>setisedit(false)} className="border border-[#6677FF] px-8 py-2 my-10 rounded-full hover:bg-[#6677FF] text-black hover:text-white transition-all">save information</button>
          :<button className="border border-[#6677FF] px-8 py-2 rounded-full hover:bg-[#6677FF] text-black hover:text-white transition-all" onClick={()=>setisedit(true)}>edit</button>
        }
      </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Myprofile;
