import React from 'react';
import img from '.././assets/error-404.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <>
        
        <Navbar></Navbar>
        <div className='h-screen flex flex-col justify-center gap-10 items-center mt-20'>
            <h1 className='text-5xl text-red-400'>Page Not Found🙁</h1>
           <img src={img} alt="" /> 
           <Link to='/'  className='btn bg-cyan-700 text-white font-bold'>Go Back</Link>
        </div>
        <Footer></Footer>
        
        </>
    );
};

export default ErrorPage;