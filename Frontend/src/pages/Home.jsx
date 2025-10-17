import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
function Home(){
return(
 
    <div className="max-w-screen-xl mx-auto">
         <Navbar />
         <Header />
         <SpecialityMenu />
         <TopDoctors /> 
         <Banner/>
         <Footer/>
       </div>
  
)
}
export default Home;