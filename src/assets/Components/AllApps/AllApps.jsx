import React from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';

const AllApps = () => {
    const allData = useLoaderData();

    return (
        <div>
            <div className='text-center mb-4'>
                <h1 className='text-4xl font-bold mb-4'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <h1>({allData.length}) Apps found</h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {allData.map((apps) => <AppsCard key={apps.id} apps={apps}></AppsCard>)}
            </div>
        </div>
    );
};

export default AllApps;