import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({item}) => {
   const {serviceName,image,rating,price,providerName,serviceId} = item
    
    return (
        <div>
            <div className='p-6 rounded-md shadow-sm hover:scale-110 transition ease-in-out bg-base-200 space-y-3'>
                <img src={image} alt="" className='h-[200px] w-full rounded-md '/>
                <p className='font-bold text-xl text-blue-500'>Service name :{serviceName}</p>
                <p className='font-semibold '>Provider name :{providerName}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Price : <span className='text-red-500'>{price}$</span></p>
                    <p className='flex items-center gap-2'><FaStarHalfAlt className='text-yellow-400' size={25} /> <span className='text-red-500'>{rating}</span></p>

                </div>
                <div className='flex justify-center'>
                    <Link to={`/cardDetails/${serviceId}`} className='btn bg-cyan-600 text-white cursor-pointer'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;