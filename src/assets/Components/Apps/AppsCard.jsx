import React from 'react';
import downloadIcon from './../../images/icon-downloads.png'
import ratingsIcon from './../../images/icon-ratings.png'
import { Link } from 'react-router';
const AppsCard = ({ apps }) => {
   
    const { id, image, title, description, ratingAvg, downloads } = apps;
    return (
     <Link to={`appDetails/${id}`}>
        <div className="card bg-base-100 w-96 sm:w-full h-full shadow-lg  border">
            <figure className='bg-white m-4'>
                <img
                    className='w-50 h-50 object-contain'
                    src={image}
                    alt="failed to load" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {title}

                </h2>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline text-green-400"><img className='w-4 h-4' src={downloadIcon} />{downloads < 1000000000 ? `${downloads / 1000000}M+` : `${downloads / 1000000000}B+`} </div>
                    <div className="badge badge-outline text-[#ff8811]"><img className='w-4 h-4' src={ratingsIcon} alt="" />{ratingAvg}</div>
                </div>
            </div>
        </div>
     </Link>
    );
};

export default AppsCard;