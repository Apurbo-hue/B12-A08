import React from 'react';
import error from './../../images/error-404.png'
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (

            
        <div className='max-w-7xl mx-auto flex flex-col gap-3 items-center'>     
            <img src={error} alt="Error 404" />
            <h1 className='text-black max-lg:text-3xl lg:text-6xl font-bold'>Oops,Page not found!</h1>
            <h4 className='text-black lg:text-2xl'>The page you are looking for is not available</h4>
            <button onClick={()=>navigate(-1)} className='btn px-6 text-lg bg-linear-to-r from-[#6d36e6] to-[#995df0]'>Go Back!</button>
        </div>

    );
};

export default Error;