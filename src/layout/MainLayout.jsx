import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
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