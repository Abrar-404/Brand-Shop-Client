import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layouts/MainLayout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Banner from './Components/Layouts/Banner';
import Footer from './Components/Footer/Footer';
import AddCar from './Components/Add Car/AddCar';
import UpdateProduct from './Components/Update Product/UpdateProduct';
import Cart from './Components/Cart/Cart';
import AuthProvider from './Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/banner',
        element: <Banner></Banner>,
      },
      {
        path: '/footer',
        element: <Footer></Footer>,
      },
      {
        path: '/addcar',
        element: <AddCar></AddCar>,
      },
      {
        path: '/updatecar',
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
