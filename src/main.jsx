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
import ErrorPage from './components/ErrorPage';
import Pdf from './components/Pdf';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('https://library-management-server-qqwtsoadl-munas-projects.vercel.app/service')
      },
      {
        path:"/addbook",
        element:<PrivateRoutes><AddBook></AddBook></PrivateRoutes>
      },
      {
        path:'/book',
        element:<PrivateRoutes><Service></Service></PrivateRoutes>,
        loader: () => fetch('https://library-management-server-qqwtsoadl-munas-projects.vercel.app/book'),
      },
      {
        path:'/book/:id',
        element:<PrivateRoutes><Dead></Dead></PrivateRoutes>,
        loader: ({params}) => fetch(`https://library-management-server-qqwtsoadl-munas-projects.vercel.app/book/${params.id}`)
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
        loader: () => fetch('https://library-management-server-qqwtsoadl-munas-projects.vercel.app/book'),
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader:({params}) => fetch(`https://library-management-server-qqwtsoadl-munas-projects.vercel.app/book/${params.id}`)
      },

     {
        path:'/mycart',
        element:<PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        //loader:() =>  fetch('https://library-management-server-6hs6jxp66-munas-projects.vercel.app/cart')
      },
      {
        path:'/mycart/:id',
        element:<PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader:({params}) =>  fetch(`https://library-management-server-qqwtsoadl-munas-projects.vercel.app/cart/${params.id}`)
      },
      {
        path:'/pdf',
        element:<PrivateRoutes><Pdf></Pdf></PrivateRoutes>,
       
      },
   
   

   
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
