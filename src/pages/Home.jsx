import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { Link, useLoaderData } from 'react-router';
import Card from '../components/Card';
import WinterCare from '../components/WinterCare';
import ExpertVets from '../components/ExpertVets';
import ExtraSectionReviews from '../components/ExtraSectionReviews';



const Home = () => {
    const data= useLoaderData()
    const sixItem = data.slice(0, 6)
    
    return (
        <div className='overflow-x-hidden '>
            
            <HeroSlider></HeroSlider>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                sixItem.map(item=><Card key={item.serviceId} item={item}></Card>)
              }
            </div>
              <div className='flex justify-center'><Link to='/services' className='btn bg-cyan-700 text-white'>See More</Link></div>
            <WinterCare></WinterCare>
            <ExpertVets></ExpertVets>
            <ExtraSectionReviews></ExtraSectionReviews>
            
        </div>
    );
};

export default Home;