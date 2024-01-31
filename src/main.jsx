import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import Treeni from './routes/treeni'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'treeni/:treeniId',
    element: <Treeni />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
