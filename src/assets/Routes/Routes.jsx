import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Route } from 'react-router'
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import Banner from "../Components/Banner/Banner";

export const router = createBrowserRouter([
    {
        path: "/", Component: Root ,
        errorElement: <Error></Error>,
        children:[
              { index:true,Component:Home},
              {index:true,Component:Banner}
              
        ]
    },
]);

