import React from 'react';
import playStore from './../../images/playstore.png'
import appStore from './../../images/appstore.png'
import bannerimg from './../../images/hero.png'
const Banner = () => {
    return (
        <div className='my-6'>
            <div className='flex flex-col gap-4 justify-center items-center text-center max-w-6xl mx-auto'>
                <h1 className='text-7xl max-sm:text-4xl font-bold'>We Build <br />
                    <span className='text-[#6d36e6]'>Productive</span> Apps</h1>

                <h4 className='text-lg max-sm:text-sm'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</h4>
                <div>
                    <div className='flex  justify-center items-center my-4'>

                        <a className='flex flex-row items-center shadow-lg border gap-2 font-bold px-4 py-2 mb-4 mx-2 rounded-sm' href="https://play.google.com/" target='blank'> <img src={playStore} alt="" /><h4>Google Play</h4></a>

                        <a className='flex flex-row items-center shadow-lg border gap-2 font-bold px-4 py-2 mb-4 mx-2 rounded-sm' href="https://www.apple.com/app-store/" target='blank'> <img src={appStore} alt="" />App Store</a>

                    </div>
                    <img src={bannerimg} alt="" />
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-2 py-10 bg-linear-to-r from-[#6d36e6] to-[#995df0] rounded-lg'>
                <h1 className='text-4xl font-bold text-center'>Trusted By Millions, Built For You</h1>
                <div className='flex gap-6 text-center'>
                    <div>
                        <p>Total Downloads</p>
                        <h1 className='text-4xl font-extrabold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h1 className='text-4xl font-extrabold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-4xl font-extrabold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;