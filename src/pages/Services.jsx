import React from 'react'
import Card from '../components/Card'
import { Link, useLoaderData } from 'react-router'
import { FaStarHalfAlt } from 'react-icons/fa'

const Services = () => {
    
    const data = useLoaderData()
  
    
  return (
    <div>
        <p className='font-bold text-4xl text-center'>Here Our Services</p>
         <div data-aos="fade-right" className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                data.map(item=><div key={item.serviceId} >
                 <div className='p-6 rounded-md shadow-sm hover:scale-110 transition ease-in-out bg-base-200 space-y-3'>
                <img src={item.image} alt="" className='h-[200px] w-full rounded-md '/>
                <p className='font-bold text-xl text-blue-500'>Service name :{item.serviceName}</p>
                <p className='font-semibold '>Provider name :{item.providerName}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Price : <span className='text-red-500'>{item.price}$</span></p>
                    <p className='flex items-center gap-2'><FaStarHalfAlt className='text-yellow-400' size={25} /> <span className='text-red-500'>{item.rating}</span></p>

                </div>
                <div className='flex justify-center'>
                    <Link to={`/cardDetails/${item.serviceId}`} className='btn bg-cyan-600 text-white cursor-pointer'>View Details</Link>
                </div>
            </div>


                </div>)
              }
            </div>
        
    </div>
  )
}

export default Services