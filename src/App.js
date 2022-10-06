import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import productsAndCartLoader from './loaders/productsAndCartLoader';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: productsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {path: "/inventory", element: <Inventory></Inventory>},
        {path: "/about", element: <About></About>},
      ]
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;