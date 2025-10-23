import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const MainLayout = () => {
    useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
    return (
        <div>
           <Navbar></Navbar> 
           <div className='bg-blue-50'>
            <div className='w-10/12 mx-auto  py-20'>
            <Outlet></Outlet>
           </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;