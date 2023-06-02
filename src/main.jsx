import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthPorvider from './Pages/AuthProvider/AuthPorvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <div className='max-w-screen-xl mx-auto'>
    <AuthPorvider>
    <RouterProvider router={router}/>
    </AuthPorvider>
    </div>
   </HelmetProvider>
  </React.StrictMode>,
)
