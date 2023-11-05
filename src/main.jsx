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
import Detail from './components/Detail';

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
        element:<AddBook></AddBook>
      },
      {
        path:'/book/:category_name',
        element:<Service></Service>,
        loader: () => fetch('http://localhost:5000/book')
      },
      {
        path:'/book/:id',
        element:<Detail></Detail>,
        loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
