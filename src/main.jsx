import React from 'react'
import Home from './routes/Home.jsx'
import MyGallery from './components/Gallery.jsx';
import Empresas from './routes/Clientes.jsx';
import Cobertura from './routes/Cobertura.jsx';
import ScrollContainer from './components/ScrollContainer.jsx';
import CarruselSwipper from './components/CarruselSwipper.jsx';
import Galleria from './components/Gallery.jsx';
import Counter from './components/Counter.jsx';
import Servicios from './routes/Servicios.jsx';


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
    path: "/servicios",
    element: <Servicios/>,
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
  {
    path: "/swipper",
    element: <CarruselSwipper />,
  },
  {
    path: "/galeria",
    element: <Galleria />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },


 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
