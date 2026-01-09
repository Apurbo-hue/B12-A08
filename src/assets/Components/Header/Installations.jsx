import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getApps } from '../handleInstall';
import ListedApps from '../Applications/ListedApps';
const Installations = () => {
    const data = useLoaderData()

    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(
        () => {
            const apps = getApps();
            const app = apps.map(apps => parseInt(apps))

            const appsData = data.filter((data) => app.includes(data.id))
            setInstalledApps(appsData)

        }, []

    )

    const handleSort = (type) => {
        
          setSortBy(type)

        if(type === 'ascending'){
         const sortedBySize = [...installedApps].sort((a, b) => a.downloads - b.downloads)
        setInstalledApps(sortedBySize)
        }
        else if(type === 'descending'){
         const sortedByratings =  [...installedApps].sort((a,b)=>b.downloads-a.downloads)
         setInstalledApps(sortedByratings)
        }
    }

    return (
        <div className='text-center p-8'>
            <h1 className='text-5xl font-bold mb-4'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center'>
                <h1>Installed Apps({installedApps.length})</h1>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By (Downloads) : {sortBy}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>handleSort('ascending')}><a>Low-High</a></li>
                        <li onClick={()=>handleSort('descending')}><a>High-Low</a></li>                      
                    </ul>
                </div>
            </div>
            {installedApps.map(listedApps => <ListedApps listedApps={listedApps}></ListedApps>)}
        </div>
    );
};

export default Installations;