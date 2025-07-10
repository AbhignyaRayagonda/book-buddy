import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from "react-dom/client"
import React from "react"
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Router from './routes/Router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    {/* <App /> */}
  </React.StrictMode>,
)
