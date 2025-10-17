import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import assets from "../assets/assets";

function About() {
  return (
    <div className="max-w-[1130px] mx-auto">
      <Navbar />

      {/* About Section */}
      <div className="flex flex-col xl:flex-row items-center gap-10 py-12 px-5">
        {/* Image */}
        <div className="w-full xl:w-1/2">
          <img src={assets.about_image} alt="About Us" className="rounded-xl w-full" />
        </div>

        {/* Text */}
        <div className="w-full xl:w-1/2">
          <h2 className="text-3xl font-bold mb-6">
            ABOUT <span className="text-primary">US</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to <strong>Prescripto</strong>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-5 pb-12">
        <h2 className="text-3xl font-bold mb-6">
          WHY <span className="text-primary">CHOOSE US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="border p-6 rounded hover:bg-[#6677FF] hover:text-white transition duration-300">
            <h4 className="text-xl font-bold mb-2">EFFICIENCY:</h4>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          {/* Box 2 */}
          <div className="border p-6 rounded hover:bg-[#6677FF] hover:text-white transition duration-300">
            <h4 className="text-xl font-bold mb-2">CONVENIENCE:</h4>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          {/* Box 3 */}
          <div className="border p-6 rounded hover:bg-[#6677FF] hover:text-white transition duration-300">
            <h4 className="text-xl font-bold mb-2">PERSONALIZATION:</h4>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
