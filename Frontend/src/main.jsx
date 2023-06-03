import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import axios from 'axios'
import Choose from './Components/Choose.jsx'
import Create from './Components/Create.jsx'
import ChessUI from './Components/ChessUI.jsx'
import ChooseHome from './Components/ChooseHome.jsx'

axios.defaults.baseURL =  'http://localhost:3000'

const AppLayout = () => {
  return(
  <React.Fragment>
    <ChooseHome />
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
    {
      path:'/choose',
      element:<Choose />
    },{
      path:'/create',
      element:<Create />
    }


  ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter} />);