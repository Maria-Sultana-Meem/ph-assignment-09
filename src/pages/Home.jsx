import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { useLoaderData } from 'react-router';
import Card from '../components/Card';
import WinterCare from '../components/WinterCare';
import ExpertVets from '../components/ExpertVets';


const Home = () => {
    const data= useLoaderData()
    
    
    return (
        <div>
            
            <HeroSlider></HeroSlider>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                data.map(item=><Card key={item.serviceId} item={item}></Card>)
              }
            </div>
            <WinterCare></WinterCare>
            <ExpertVets></ExpertVets>
            
        </div>
    );
};

export default Home;