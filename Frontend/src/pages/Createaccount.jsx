import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Createaccount() {
  const [state, setstate] = useState("signup");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");   // ✅ NEW

  const onsubmithandler = (e) => {
    e.preventDefault();

    if (state === "login") {
      setMessage("✅ You have been logged in successfully!");
    } else {
      setMessage("🎉 Account created successfully!");
    }

    // Clear fields
    setemail("");
    setpassword("");
    setname("");
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

          {/* Success message */}
          {message && (
            <p className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm text-center">
              {message}
            </p>
          )}

          <form onSubmit={onsubmithandler} className="space-y-4">
            {/* Name only for signup */}
            {state === "signup" && (
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6366F1] text-white py-2 rounded-md font-semibold hover:bg-[#4F46E5] transition"
            >
              {state === "signup" ? "Create Account" : "Login"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            {state === "signup" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setstate("login");
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
                    setstate("signup");
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
