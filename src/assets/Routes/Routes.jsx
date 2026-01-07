import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Route } from 'react-router'
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";

export const router = createBrowserRouter([
    {
        path: "/", Component: Root ,
        errorElement: Error,
        children:[
              { index:true,Component:Home},
              
        ]
    },
]);

