import React from 'react';
const experts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Canine Nutrition & Wellness",
    photo: "https://i.ibb.co.com/qMMpNPPp/sara.jpg",
    email: "sarah.johnson@warmPaws.com"
  },
  {
    id: 2,
    name: "Dr. Michael Smith",
    specialty: "Pet Grooming & Skin Care",
    photo: "https://i.ibb.co.com/v6vqrLFz/smith.jpg",
    email: "michael.smith@warmPaws.com"
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialty: "Winter Pet Safety & Behavior",
    photo: "https://i.ibb.co.com/vvwpWpmN/emily.jpg",
    email: "emily.davis@warmPaws.com"
  }]

const ExpertVets = () => {

    return (
        <div className='py-10'>
            <h1 className='font-bold text-center text-4xl mb-6'>Meet Our Expert Vets</h1>
            <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    experts.map(item=><div key={item.id} className='p-6 bg-blue-100 rounded-md text-center space-y-3'>
                      <div className='flex justify-center'><img src={item.photo} alt="" className='rounded-full w-40 h-40'/></div>
                       <h3 className='font-bold text-blue-800 text-2xl'>{item.name}</h3>
                       <p className='font-semibold'>{item.specialty}</p>
                       <p className='text-xs'>{item.email}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExpertVets;