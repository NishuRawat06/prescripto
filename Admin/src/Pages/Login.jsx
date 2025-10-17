import React, { useContext, useState } from "react";
// import {assets} from '../assets/assets';
import { Admincontext } from "../Context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SetAToken, backendurl } = useContext(Admincontext);
  const onsubmithandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendurl + "/api/admin/login", {
          email,
          password,
        });
        if (data.sucess) {
          console.log(data.Token);
          localStorage.setItem("aToken", data.Token);
          SetAToken(data.Token);
          toast.success("Login successful!");
        } else {
          toast.error(data.message || "Login failed");
        }
      } else {
        toast.info("Doctor login not implemented yet");
      }
    } catch (error) {
      console.error("login error:", error);
    }
  };
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onsubmithandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg ">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-[#6677FF]">{state}</span>Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="Email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button
          className="bg-[#6677FF] text-white w-full py-2 rounded-md text-base"
          type="submit"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?
            <span
              className="text-[#6677FF] underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?
            <span
              className="text-[#6677FF] underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
