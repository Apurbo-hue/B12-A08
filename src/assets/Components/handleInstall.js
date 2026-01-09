import { toast, ToastContainer } from "react-toastify";

const getApps =()=>{
    const installedApps = localStorage.getItem("installedApps")
    if(installedApps)
    {
        const convertedInstalledApps = JSON.parse(installedApps)
        return convertedInstalledApps;
    }
    else{
        return [];
    }
}

const setApps =(id)=>{
    const apps = getApps()
    if(apps.includes(id))
    {
        toast('App already installed');
    }
    else{
        apps.push(id);
        toast('App installed')
        const stringifiedApps = JSON.stringify(apps)
        localStorage.setItem("installedApps",stringifiedApps);
    }
}

const removeApps =(id)=>{
       const apps = getApps();
       const removedapps= apps.filter(app=>app!=id)
       const stringifiedApps = JSON.stringify(removedapps)
       localStorage.setItem("installedApps",stringifiedApps);
}


export {getApps,setApps,removeApps}