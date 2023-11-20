import React from 'react'
import Home from './routes/Home.jsx'
import MyGallery from './components/Gallery.jsx';
import Empresas from './routes/Clientes.jsx';
import Cobertura from './routes/Cobertura.jsx';
import ScrollContainer from './components/ScrollContainer.jsx';


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
    path: "/cobertura",
    element: <Cobertura/>,
  },
  {
    path: "/clientes",
    element: <Empresas />,
  },
  {
    path: "/scroll",
    element: <ScrollContainer />,
  },


 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
