import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { Link, useLoaderData } from 'react-router';
import Card from '../components/Card';
import WinterCare from '../components/WinterCare';
import ExpertVets from '../components/ExpertVets';
import ExtraSectionReviews from '../components/ExtraSectionReviews';



const Home = () => {
    const data= useLoaderData()
    const sixItem = data.slice(0, 8)
    
    return (
        <div className='overflow-x-hidden '>
            
            <HeroSlider></HeroSlider>
             
           <div>
            <h1 className='text-4xl font-bold text-center mt-5'>Services</h1>
             <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              {
                sixItem.map(item=><Card key={item.serviceId} item={item}></Card>)
              }
            </div>
           </div>
              <div className='flex justify-center'><Link to='/services' className='btn bg-cyan-700 text-white'>See More</Link></div>
            <WinterCare></WinterCare>
            <ExpertVets></ExpertVets>
            <ExtraSectionReviews></ExtraSectionReviews>
            
        </div>
    );
};

export default Home;