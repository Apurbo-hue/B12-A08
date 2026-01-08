import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Route } from 'react-router'
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import Banner from "../Components/Banner/Banner";
import AllApps from "../Components/AllApps/AllApps";
import AppDetails from "../Components/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: "/", Component: Root ,
        errorElement: <Error></Error>,
        children:[
              { index:true,loader:()=>fetch('companies.json'),Component:Home},
              {path:'/allApps',loader:()=>fetch('allCompanies.json'),Component:AllApps},
              {path:'/appDetails',loader:()=>fetch('allCompanies.json'),Component:AppDetails}
              
        ]
    },
]);

