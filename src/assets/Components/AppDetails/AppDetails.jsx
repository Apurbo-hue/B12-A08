import React from 'react';
import { useNavigate } from 'react-router';

const AppDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button className='btn' onClick={()=>{navigate(-1)}}>go back</button>
            This is app details
        </div>
    );
};

export default AppDetails;