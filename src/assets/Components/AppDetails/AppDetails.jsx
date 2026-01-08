import React from 'react';
import downloadIcon from './../../images/icon-downloads.png'
import rateIcon from './../../images/icon-ratings.png'
import reviewIcon from './../../images/icon-review.png'
import { useLoaderData, useNavigate, useParams } from 'react-router';
import Chart from '../BarCharts/Chart';



const AppDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const datas = useLoaderData();
    console.log(datas);
   


    const app = datas.find(data => data.id === parseInt(id))
    console.log(app)
    const { title, companyName, image, downloads, description, ratingAvg,ratings, reviews, size, } = app
    return (
        <div>
            <div className='flex max-sm:flex-col gap-10 jusify-between items-center p-8 border-b'>
                <div>
                    <img className='h-60' src={image} alt="" />
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-6xl font-bold'>{title}</h1>
                    <p >Developed by: <span className='text-[#6e37e6]'>{companyName}</span></p>

                    <div className='border w-full'></div>

                    <div className='flex gap-8'>
                        <div><img src={downloadIcon} alt="" /> Downloads: {downloads < 1000000000 ? `${downloads / 1000000}M+` : `${downloads / 1000000000}B+`}</div>
                        <div><img src={rateIcon} alt="" />Ratings: {ratingAvg}</div>
                        <div><img src={reviewIcon} alt="" />Reviews: {reviews}</div>

                    </div>
                    <button className='btn bg-[#00d390]'>Install Now ({size}MB)

                    </button>
                </div>

            </div>
            <h1 className='text-4xl font-bold'>Ratings:</h1>
            <Chart ratings={ratings}></Chart>

            <div className='mt-4'>
                <h1 className='text-3xl font-bold'>Description:</h1>
                {description}
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn  bg-linear-to-r from-[#6d36e6] to-[#995df0]' onClick={() => { navigate(-1) }}>go back</button>
            </div>
        </div>
        
        
    );
};

export default AppDetails;