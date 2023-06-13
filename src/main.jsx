import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Checkout from './pages/checkout';
import Success from './pages/success';
import AdminKost from './pages/admin/kost';
import AdminPenyewa from './pages/admin/penyewa';
import CreateKost from './pages/admin/kost/create';
import EditKost from './pages/admin/kost/edit';
import EditPenyewa from './pages/admin/penyewa/edit';


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
    path: "/kelola-kost/tambah",
    element: (<CreateKost/>)
  },
  {
    path: "/kelola-kost/edit/:id",
    element: (<EditKost/>)
  },
  {
    path: "/kelola-penyewa",
    element: (<AdminPenyewa/>)
  },
  {
    path: "/kelola-penyewa/edit/:id",
    element: (<EditPenyewa/>)
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
