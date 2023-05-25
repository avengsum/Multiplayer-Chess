import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import axios from 'axios'

axios.defaults.baseURL =  'http://localhost:8000'

const AppLayout = () => {
  return(
  <React.Fragment>
    <App />
    <Outlet />
  </React.Fragment>
  )
}

const approuter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[{
      path:'/register',
      element:<Register />
    },
    {
      path:'/login',
      element:<Login />
    },

  ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
