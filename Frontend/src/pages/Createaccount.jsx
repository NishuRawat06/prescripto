import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export default function Createaccount() {
  const navigate = useNavigate();

  const [state, setState] = useState("signup"); // signup or login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (state === "signup") {
        // SIGNUP
        await axios.post(`${import.meta.env.VITE_API}/api/auth/register`, {
          name,
          email,
          password,
        });
        setMessage("Account created successfully. Please login.");
        setState("login");
      } else {
        // LOGIN
        const res = await axios.post(`${import.meta.env.VITE_API}/api/auth/login`, {
          email,
          password,
        });

        // Save JWT token
        localStorage.setItem("token", res.data.token);
        setMessage("Login successful!");
       
      }

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center px-4 pt-10 min-h-[80vh]">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {state === "signup" ? "Create Account" : "Login"}
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            Please {state === "signup" ? "signup" : "login"} to book appointment
          </p>

          {/* MESSAGE */}
          {message && (
            <p
              className={`text-center text-sm mb-3 ${
                message.toLowerCase().includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={onSubmitHandler} className="space-y-4">
            {state === "signup" && (
              <div>
                <label className="block text-gray-700 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6366F1] text-white py-2 rounded-md font-semibold hover:bg-[#4F46E5] transition"
            >
              {loading
                ? "Please wait..."
                : state === "signup"
                ? "Create Account"
                : "Login"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            {state === "signup" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setState("login");
                    setMessage("");
                  }}
                  className="text-blue-500 underline cursor-pointer"
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                Create a new account?{" "}
                <span
                  onClick={() => {
                    setState("signup");
                    setMessage("");
                  }}
                  className="text-blue-500 underline cursor-pointer"
                >
                  Click here
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
