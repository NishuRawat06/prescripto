import React, { useContext } from "react";
import Login from "./Pages/Login";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Admincontext } from "./Context/AdminContext";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import {Routes,Route } from "react-router-dom";
import Dashboard from "./Pages/admin/Dashboard";
import Allappointments from "./Pages/admin/Allappointments";
import Adddoctor from "./Pages/admin/Adddoctor";
import Doctorlist from "./Pages/admin/Doctorlist";
const App = () => {
  const {aToken} = useContext(Admincontext)
return aToken?(
  <div>
<ToastContainer/>
<Navbar/>
<div>
  <Sidebar/>
  <Routes>
    <Route path="/" element={<></>}/>
    <Route path="/admin-dashboard" element={<Dashboard/>}/>
    <Route path="/all-appointments" element={<Allappointments/>}/>
    <Route path="/add-doctors" element={<Adddoctor/>}/>
    <Route path="/doctors-list" element={<Doctorlist/>}/>
  </Routes>
</div>
  </div>
) :(
  <div>
<Login/>
<ToastContainer/>
  </div>
)
}
export default App;