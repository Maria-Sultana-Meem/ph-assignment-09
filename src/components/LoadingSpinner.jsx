import React from 'react';
import { FadeLoader } from "react-spinners";
const LoadingSpinner = () => {
    return (
        <div  className="flex justify-center items-center h-screen">
            <FadeLoader color="#06b6d4" height={20} ></FadeLoader>

        </div>
    );
};

export default LoadingSpinner;