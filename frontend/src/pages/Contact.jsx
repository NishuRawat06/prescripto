import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import assets from "../assets/assets";

function Contact() {
  return (
    <div className="max-w-[1130px] mx-auto">
      <Navbar />

      <div className="flex flex-col justify-center items-center px-4 py-12 gap-10">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>

        {/* Contact Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-[360px]">
            <img src={assets.contact_image} alt="Contact illustration" className="w-full rounded-lg" />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 w-full md:w-[340px]">
            <h2 className="text-2xl font-semibold">Our Office</h2>
            <p className="text-gray-700">
              00000 Willms Station<br />
              Suite 000, Washington, USA
            </p>
            <p className="text-gray-700">
              <strong>Tel:</strong> (000) 000-0000<br />
              <strong>Email:</strong> greatstackdev@gmail.com
            </p>

            <h3 className="text-lg font-semibold mt-4">Careers at Prescripto</h3>
            <p className="text-gray-700">Learn more about our teams and job openings.</p>
            <button className="w-[144px] h-[50px] border-2 border-black hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
