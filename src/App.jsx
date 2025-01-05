import React from 'react';
import Store from './Pages/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './Pages/Details';
import Layout from './Pages/Layout';
import CartPage from './Pages/Cart';
import Contact from './Pages/About';
import Home from './Pages/Home';
const App = () => {

  const routes=createBrowserRouter(
    [
      {
        path:"/",
        element:<Layout/>,
        children:
        [ 
          {
            path:"",
            element:<Home/>
          },
          {
            path:"store",
            element:<Store/>
          },
          {
            path:"/:category_slug?",
            element:<Store/>
          },
          {
            path:"details/:Product_id",
            element:<Details/>
          },
          {
            path:"cart",
            element:<CartPage/>
          },
          {
            path:"contact",
            element:<Contact/>
          }
        ]
      }

      
    ]
  )

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  );
}

export default App;
