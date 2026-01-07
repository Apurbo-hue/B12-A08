import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Route } from 'react-router'
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/", Component: Root ,
        children:[
              { index:true,Component:Home},
              
        ]
    },
]);

