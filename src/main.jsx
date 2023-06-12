import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Checkout from './pages/checkout';
import Success from './pages/success';
import Admin from './pages/admin';
import Penyewa from './pages/admin/penyewa';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: "/detail/:name",
    element: (<Detail/>)
  },
  {
    path: "/checkout/:name",
    element: (<Checkout/>)
  },
  {
    path: "success",
    element: (<Success/>)
  },
  {
    path: "admin",
    element: (<Admin/>)
  },
  {
    path: "penyewa",
    element: (<Penyewa/>)
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
