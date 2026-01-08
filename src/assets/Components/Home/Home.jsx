import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import Banner from '../Banner/Banner';
const Home = () => {

    const data = useLoaderData();

    return (
        <>
            <Banner></Banner>
            <div className='text-center '>
                <h1 className='text-5xl font-bold  m-4'>Trending Apps</h1>
                <p className='text-xl text-[#627382] m-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='py-4 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 place-items-center gap-4'>
                {data.map((apps) => <AppsCard key={apps.id} apps={apps}></AppsCard>)}
            </div>

            <div className='flex justify-center'>
                <Link to="/allApps"><button className='btn bg-linear-to-r from-[#6d36e6] to-[#995df0] rounded-lg'>Show All</button></Link>
                
            </div>

        </>
    );
};

export default Home;