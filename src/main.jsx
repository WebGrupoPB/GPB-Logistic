import React from 'react'
import Home from './routes/Home.jsx'
import MyGallery from './components/Gallery.jsx';



import './index.css'

import * as ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";

 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
     errorElement: <h1>Error Page :c</h1>,
   },
   {
    path: "/galeria",
    element: <MyGallery />,
  },


 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
