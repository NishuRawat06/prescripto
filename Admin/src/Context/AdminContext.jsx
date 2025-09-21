import { createContext, useState } from "react";
export const Admincontext=createContext();
const AdminContextProvider =(props)=>{
  const [aToken,SetAToken] =useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
  const backendurl=import.meta.env.VITE_BACKEND_URL
    const value ={
      aToken,SetAToken,
      backendurl
    }
    return(
        <Admincontext.Provider value={value}>
          {props.children}
        </Admincontext.Provider>
    )
}
export default AdminContextProvider;