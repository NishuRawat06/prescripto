import React, { useContext } from "react";
import Login from "./Pages/Login ";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Admincontext } from "./Context/AdminContext";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
const App = () => {
  const {aToken} = useContext(Admincontext)
return aToken?(
  <div>
<ToastContainer/>
<Navbar/>
<div>
  <Sidebar/>
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