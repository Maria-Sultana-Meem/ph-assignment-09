import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaStarHalfAlt } from 'react-icons/fa';

const AllItems = () => {
  const originalData = useLoaderData();
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc
  const [filterProvider, setFilterProvider] = useState('all');

  useEffect(() => {
    let filteredData = [...originalData];

    // Filter by provider
    if (filterProvider !== 'all') {
      filteredData = filteredData.filter(item => item.providerName === filterProvider);
    }


    filteredData.sort((a, b) => 
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

    setData(filteredData);
  }, [sortOrder, filterProvider, originalData]);

  
  const providers = ['all', ...new Set(originalData.map(item => item.providerName))];

  return (
    <div className="py-10 ">
      <h1 className="text-4xl font-bold text-center mb-6">All Items</h1>

   
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
       
        <div>
          <label className="mr-2 font-semibold">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-blue-400 rounded-md"
          >
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>

        {/* Filtering */}
        <div>
          <label className="mr-2 font-semibold">Filter by Provider:</label>
          <select
            value={filterProvider}
            onChange={(e) => setFilterProvider(e.target.value)}
            className="p-2 border border-blue-400 rounded-md"
          >
            {providers.map((provider, idx) => (
              <option key={idx} value={provider}>{provider}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map(item => (
          <div key={item.serviceId}>
            <div className="p-6 rounded-md shadow-sm hover:scale-105 transition ease-in-out bg-base-200 h-[450px] flex flex-col justify-between">
              
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.serviceName} 
                className="h-[200px] w-full rounded-md object-cover"
              />

              {/* Info */}
              <div className="space-y-2 mt-2">
                <p className="font-bold text-xl text-blue-500">Service: {item.serviceName}</p>
                <p className="font-semibold">Provider: {item.providerName}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">Price: <span className="text-red-500">{item.price}$</span></p>
                  <p className="flex items-center gap-2">
                    <FaStarHalfAlt className="text-yellow-400" size={20}/> 
                    <span className="text-red-500">{item.rating}</span>
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-4">
                <Link 
                  to={`/cardDetails/${item.serviceId}`} 
                  className="btn bg-cyan-600 text-white w-full hover:bg-cyan-700 transition"
                >
                  View Details
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
