import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './routes/Routes'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
   {/* <ToastContainer position='top-center'></ToastContainer> */}
   <Toaster position='top-center'></Toaster>
   
   </AuthProvider>
  </StrictMode>,
)
