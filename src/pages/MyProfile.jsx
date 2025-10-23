import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const MyProfile = () => {
  const {user, updateProfileFunc} = useContext(AuthContext)
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfileFunc(name, photoURL);
      toast.success('Profile updated successfully!');
      setEditing(false);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className='  py-10 text-center space-y-5 px-6 border w-1/2 mx-auto mt-10 bg-gradient-to-b from-white to to-blue-600'>
        <p className='text-4xl font-bold text-blue-700'>{user?.displayName}</p>
        <p className='text-xl font-semibold text-gray-400'>{user?.email}</p>
        <div className='flex justify-center '>
          <img className='rounded-full' src={user?.photoURL || "https://via.placeholder.com/88"} alt="" />
        </div>
        {!editing ? (
        <div className="flex justify-center">
          <button
            className="btn text-white bg-cyan-700"
            onClick={() => setEditing(true)}
          >
            Update Profile
          </button>
        </div>
      ):(
        <form
          onSubmit={handleUpdate}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
            className="input input-bordered w-64"
          />
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter new photo URL"
            className="input input-bordered w-64"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

    </div>
  );
};

export default MyProfile;