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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import CardLoader from './Components/Brand Cards/CardLoader';
import AddedProducts from './Components/Added Products/AddedProducts';
import DetailLoader from './Components/SeeDetails/detailLoader';
import ViewDetails from './Components/SeeDetails/ViewDetails';
import UpdateItem from './Components/Added Products/UpdateItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch('https://brand-shop-server-alpha.vercel.app/newBrand'),
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
        path: '/viewdetails/:_id',
        element: <ViewDetails></ViewDetails>,
        loader: () =>
          fetch(`https://brand-shop-server-alpha.vercel.app/allProducts`),
      },
      {
        path: '/seedetails/:brandName',
        element: (
          <PrivateRoute>
            <DetailLoader></DetailLoader>
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://brand-shop-server-alpha.vercel.app/allProducts'),
      },
      {
        path: '/addedproducts',
        element: <AddedProducts></AddedProducts>,
      },
      {
        path: '/cardDetails/:brandName',
        element: (
          <PrivateRoute>
            <CardLoader></CardLoader>
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://brand-shop-server-alpha.vercel.app/allProducts'),
      },
      {
        path: '/addcar',
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: '/updatecar/:id',
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-alpha.vercel.app/userBrands/${params.id}`
          ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateItem/:id',
        element: <UpdateItem />,
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
