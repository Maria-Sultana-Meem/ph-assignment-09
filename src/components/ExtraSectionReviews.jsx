import React from 'react';
import { FaStar } from 'react-icons/fa';
const reviews = [
  {
    id: 1,
    name: "Sadik Rahman",
    pet: "Milo (Cat)",
    comment: "WarmPaws helped me find the perfect winter coat for my cat. She looks so cute and stays warm!",
    rating: 5,
    image: "https://i.ibb.co.com/NdGDYSGV/milo.jpg"
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    pet: "Rocky (Dog)",
    comment: "Their grooming and paw care services are amazing. Rocky enjoys every visit!",
    rating: 4.8,
    image: "https://i.ibb.co.com/JWF7h2HY/dog.jpg"
  },
  {
    id: 3,
    name: "Raisa Ahmed",
    pet: "Bunny (Rabbit)",
    comment: "Very professional service! The experts really care about pet comfort during winter.",
    rating: 4.9,
    image: "https://i.ibb.co.com/tPKQsxrW/rabi.jpg"
  }
];

const ExtraSectionReviews = () => {
    return (
        <div>
            <div className='py-10'>
            <h2 className="text-4xl font-bold text-cyan-800 text-center">Happy Pet Owners</h2>
        <p className="text-gray-600 mt-2 text-center text-2xl font-semibold">See what our lovely customers say about WarmPaws!</p>
            <div data-aos="zoom-out" className='grid grid-cols-1 mt-5 md:grid-cols-3 gap-5'>
                {
                    reviews.map(item=><div key={item.id} className='p-6 bg-blue-100 rounded-md text-center space-y-3'>
                      <div className='flex justify-center'><img src={item.image} alt="" className='rounded-full w-40 h-40'/></div>
                       <h3 className='font-bold text-2xl'>{item.name}</h3>
                       <p className='font-semibold text-2xl flex justify-center'><span className='text-red-500'>{item.pet} <span className='flex justify-center items-center'>{item.rating}<FaStar className='text-yellow-500'></FaStar></span></span></p>
                       <p className='text-gray-500'>{item.comment}</p>
                    </div>)
                }
            </div>
        </div>


        </div>
    );
};

export default ExtraSectionReviews;