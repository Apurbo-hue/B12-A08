import React from 'react';
import downloadIcon from './../../images/icon-downloads.png'
import ratingIcon from './../../images/icon-ratings.png'
import reviewIcon from './../../images/icon-review.png'
import { removeApps } from '../handleInstall';
import { toast } from 'react-toastify';

const ListedApps = ({ listedApps }) => {
   
    const { title,id, ratingAvg, downloads, image, size } = listedApps
    return (
        <div>
           
            <div className='flex justify-between border items-center my-4 rounded-lg p-4'>
            <div className='flex gap-4 items-center'>
                <div>
                    <img src={image} className='h-8 w-8' alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-2xl'> {title}</h1>
                    <div className='flex flex-row gap-4'>
                        <div><img className='w-4 h-4' src={downloadIcon} alt="" /> {downloads < 1000000000 ? `${downloads / 1000000}M+` : `${downloads / 1000000000}B+`}</div>
                        <div><img className='w-4 h-4' src={ratingIcon} alt="" />{ratingAvg}</div>
                        <div><img className='w-4 h-4' src={reviewIcon} alt="" />{size}</div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>{removeApps(id);toast('App Uninstalled, Refresh to see the updated list')}} className='btn bg-green-500'>Uninstall</button>
            </div>
        </div>
        </div>
    );
};

export default ListedApps;