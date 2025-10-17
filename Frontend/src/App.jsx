import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Alldoctors from "./pages/Alldoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import Login from "./pages/Login";
import Myappointments from "./pages/Myappointments";
import Createaccount from "./pages/Createaccount";
import Appointment from "./pages/Appointment";
import Myprofile from "./pages/Myprofile";
function App(){
return(
  <div className="w-full max-w-[1130px] mx-auto px-5 md:px-10">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Alldoctors" element={<Alldoctors />} />
      <Route path="/Alldoctors/:speciality" element={<Alldoctors />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Myappointments" element={<Myappointments />} />
      <Route path="/Myprofile" element={<Myprofile />} />
      <Route path="/Createaccount" element={<Createaccount />} />
      <Route path="/Appointment/:id" element={<Appointment />} />
    </Routes>
</div>

)
}
export default App;