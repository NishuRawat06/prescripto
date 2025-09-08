import React from "react";
import assets from "../assets/assets";

export default function Footer() {
  return (
    <div className="w-full py-10 px-6">
      {/* Top section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left - Logo and description */}
        <div className="md:w-1/3">
          <img src={assets.logo} alt="Logo" className="mb-4 w-32" />
          <p className="text-gray-700 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Center - Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-3">CONTACT</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>+0-000-000-000</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t pt-4 text-center text-gray-500 text-sm">
        © 2025 Your Company. All rights reserved.
      </div>
    </div>
  );
}
