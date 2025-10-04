import React,{useContext} from "react";
import admin_logo from "../assets/Admin_logo.svg";
import {Admincontext} from '../Context/AdminContext';
import {useNavigate} from 'react-router-dom'
const Navbar =() =>{
    const { aToken,setAToken } = useContext( Admincontext )
    const navigate =useNavigate()
    const logout =() =>{
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }
    return(
        <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
        <div className="flex items-center gap-2 text-xs">
            <img className="w-36 sm:w-40 cursor-pointer h-12 " src={admin_logo} alt=""/>
            <p className="boredr px-2.5 py-0.5 rounded-full boredr-grey-500 text-grey-600">{aToken ? 'Admin' :'Doctor'}</p>
        </div>
        <button onClick={logout} className="bg-[#6677FF] text-white text-sm px-10 py-2 rounded-full">Logout</button>
        </div>
    )
}
export default Navbar; 