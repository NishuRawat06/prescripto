import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Createaccount() {
  const[state,setstate]=useState('signup');
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const[name,setname]=useState(''); 
  const onsubmithandler=async(e)=>(
    e.preventDefault()
  )
  return (
    <div>
      <Navbar />
      <div className="flex justify-center px-4 pt-10 min-h-[80vh]">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{state==='signup'?"Create Account":"login"}</h2>
        <p className="text-gray-600 mb-4 text-sm">Please {state==="signup"?"signup":"login"} to book appointment</p>

        <form className="space-y-4">
          {state==="signup"&& <div>
            <label className="block text-gray-700 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e)=>setname(e.target.name)}
              value={name}
            />
          </div>}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6366F1] text-white py-2 rounded-md font-semibold hover:bg-[#4F46E5] transition"
          >
           {state==="signup"?"create account":"login"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
         {state==="signup"
         ?(<>Already have an account?<span onClick={()=>setstate("login")} className="text-primary underline cursor-pointer text-blue-500">login here</span></>)
         :(<>create a new account?<span onClick={()=>setstate("signup")} className="text-primary underline cursor-pointer text-blue-500">click here</span></>)
        }
        </p>
      </div>
    </div>

      <Footer />
    </div>
  );
}
