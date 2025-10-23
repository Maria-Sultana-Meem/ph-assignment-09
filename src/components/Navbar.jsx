import React, { useContext } from "react";
import { IoPawSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser ,signoutUserFunc} = useContext(AuthContext);

    const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-cyan-600 px-4 py-2 cursor-pointer hover:py-3 hover:px-6"
              : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-cyan-600 px-4 py-2 cursor-pointer hover:py-3 hover:px-6"
              : "text-black"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-cyan-600 px-4 py-2 cursor-pointer hover:py-3 hover:px-6"
              : "text-black"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-blue-100 shadow-sm to fixed w-full top-0 z-10">
      <div className="navbar   w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className=" btn-ghost text-xl flex justify-between items-center gap-2"
          >
            <IoPawSharp className="text-red-600" size={50} />
            <span className="font-bold text-2xl text-cyan-600"> WarmPaws</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
          
        <div className="navbar-end ">
          <div className="relative group">
            {
            user?  <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="ml-70 h-[50px] w-[50px] rounded-full mx-auto"
                alt=""
              /> : null
          }
          <div className="absolute bottom-full top-5  right-0 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity  text-red-500 text-sm px-2 py-1 rounded">
                  {user?.email}
                </div>
          </div>
          
         {
          user?  <button onClick={handleSignout}
            
            className=" text-white hover:scale-110 transition-all duration-300 bg-gradient-to-bl px-6 py-2 rounded-md from-cyan-100 to-cyan-600 "
          >
            Log Out
          </button>:  <Link
            to="/login"
            className=" text-white hover:scale-110 transition-all duration-300 bg-gradient-to-bl px-6 py-2 rounded-md from-cyan-100 to-cyan-600 "
          >
            Login
          </Link>
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
