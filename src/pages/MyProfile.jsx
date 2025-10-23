import React from 'react'
import { toast } from 'react-toastify';

const MyProfile = () => {
  const handleNotify = () => {
    toast.success(" You’ll be notified when the profile is ready!", 
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-600 animate-bounce drop-shadow-lg">
         Profile is Coming Soon
      </h1>

      <p className="mt-5 text-lg  animate-pulse">
        Stay tuned! We’re crafting something amazing for you ✨
      </p>

      <div className="mt-10">
        <button
          onClick={handleNotify}
          className="btn btn-outline  "
        >
          Notify Me
        </button>
      </div>

      <div className="absolute bottom-6 text-white text-sm ">
        Developed by <span className="font-bold">Maria</span>
      </div>
    </div>
  );
}

export default MyProfile