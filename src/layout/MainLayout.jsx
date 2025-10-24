import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';




const MainLayout = () => {
  const {loading,setLoading} = useContext(AuthContext)
const navigation = useNavigation()

useEffect(()=>{
  setLoading(true)
 const timer =setTimeout(()=>setLoading(false),5000)
 return ()=>clearTimeout(timer)

  },[])

useEffect(()=>{
if (navigation.state==="loading") {
    setLoading(true)
  }
  else{
    const timer =setTimeout(()=>setLoading(false),300)
 return ()=>clearTimeout(timer)
  }

},[navigation.state])


  

    useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });

  }, []);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
}
    return (
        <div>
           <Navbar></Navbar> 
           <div className='bg-blue-50'>
            <div className='md:w-10/12 lg:w-10/12 w-11/12 mx-auto  py-20'>
            <Outlet></Outlet>
           </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;