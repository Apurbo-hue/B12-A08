import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from '../Apps/AppsCard';
import errorImg from './../../images/App-Error.png'

const AllApps = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState("")


    const filteredApps = allData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
   

    return (
        <div>
            <div className='text-center mb-4'>
                <h1 className='text-4xl font-bold mb-4'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between  mb-4'>
                <h1 className='p-4'>({filteredApps.length}) Apps found</h1>
                <input type="text" placeholder='Search Apps' className='pl-4 pr-12 border rounded-lg'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 sm:justify-items-stretch'>
                {filteredApps.map((apps) => <AppsCard key={apps.id} apps={apps}></AppsCard>)}

            </div>
            {filteredApps.length === 0 && search.trim() !== "" && (
                <div className='flex justify-center'>
                    <figure>
                        <img src={errorImg} alt="" />
                    </figure>
                </div>

            )}
        </div>
    );
};

export default AllApps;