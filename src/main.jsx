import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Service from './components/Service';
import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import Dead from './components/Dead';
import Allbook from './components/Allbook';
import Update from './components/Update';
import PrivateRoutes from './components/PrivateRoutes';
import MyCart from './components/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/service')
      },
      {
        path:"/addbook",
        element:<PrivateRoutes><AddBook></AddBook></PrivateRoutes>
      },
      {
        path:'/book',
        element:<PrivateRoutes><Service></Service></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/book'),
      },
      {
        path:'/book/:id',
        element:<PrivateRoutes><Dead></Dead></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
       },
      {
         path:'/login',
         element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
 
      {
        path:'/allbook',
        element:<Allbook></Allbook>,
        loader: () => fetch('http://localhost:5000/book'),
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      },

     {
        path:'/mycart',
        element:<PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader:() =>  fetch('http://localhost:5000/cart')
      },
      {
        path:'/mycart/:id',
        element:<PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader:({params}) =>  fetch(`http://localhost:5000/cart/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
