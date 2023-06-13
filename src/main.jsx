import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Checkout from './pages/checkout';
import Success from './pages/success';
import Penyewa from './pages/admin/penyewa';
import AdminKost from './pages/admin/kost';


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
    path: "/kelola-kost",
    element: (<AdminKost/>)
  },
  {
    path: "/kelola-penyewa",
    element: (<Penyewa/>)
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
