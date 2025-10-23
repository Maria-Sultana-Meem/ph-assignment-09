import React, { use } from 'react';
const data = fetch('/winterCare.json').then(res=>res.json())
const WinterCare = () => {
   const fetchPromise = use(data) 
   
    
    
    return ( <>
     <div className='py-10'>
        <h2 className="text-4xl font-bold text-center mb-6">Winter Care Tips for Pets</h2>
     </div>
        <div data-aos="fade-left" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
              fetchPromise.map(item=><div key={item.id} className='p-6 rounded-md space-y-5 shadow-sm text-center bg-base-200'>
                  <p className='font-bold text-blue-500 text-2xl'>{item.title}</p>   
                  <p>{item.description}</p>   
                  

              </div>)
            }
        </div>
    </>
        
        
    );
};

export default WinterCare;