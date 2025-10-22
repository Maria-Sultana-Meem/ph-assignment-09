import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const {serviceId} = useParams()
    const data = useLoaderData()
    
    const service = data.find(item =>(item.serviceId) === parseFloat(serviceId));
  
    
    return (
        <div className='pt-10'>
            {service  ? (
        <div className="card bg-base-100 shadow-xl flex md:flex-row gap-10 p-10 justify-between items-center">
          <div>
            <img src={service.image} alt={service.serviceName} className="rounded-xl" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{service.serviceName}</h2>
            <p className='font-semibold text-xl '>Provider name :{service.providerName}</p>
            <p className="text-gray-600 text-xl mt-2">{service.description}</p>
            
                            <div className='flex justify-between items-center'>
                                <p className='font-bold text-2xl'>Price : <span className='text-red-500'>{service.price}$</span></p>
                                <p className='flex items-center gap-2 text-2xl'><FaStarHalfAlt className='text-yellow-400' size={25} /> <span className='text-red-500'>{service.rating}</span></p>
            
                            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500 text-xl font-bold">
          No service found for ID: {serviceId}
        </p>
      )}


        </div>
    );
};

export default CardDetails;