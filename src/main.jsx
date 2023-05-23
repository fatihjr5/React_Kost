import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Checkout from './pages/checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: "detail",
    element: (<Detail/>)
  },
  {
    path: "checkout",
    element: (<Checkout/>)
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
