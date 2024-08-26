import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Veg from './component/Menu/Veg';
import Contact from './views/Contact/Contact';
import Nonveg from './component/Menu/Nonveg';




const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/veg',
    element: <Veg />, // Correct the component usage to Veg (uppercase)
  },
 
  {
    path:'/contact',
    element:<Contact />,
  },
  {
    path:'/nonveg',
    element:<Nonveg/>
  }
  
]);

root.render(
  <RouterProvider router={router} />
);