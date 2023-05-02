import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './pages/home/home/Home.jsx';
import Login from './pages/home/login/Login.jsx';
import Register from './pages/home/register/Register.jsx';
import Blog from './pages/home/blog/Blog.jsx';
import About from './pages/home/about/About.jsx';
import FoodSection from './component/food-section/FoodSection.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "about",
        element: <About></About>
      },

      {
        path: '/category/:id',
        element: <FoodSection></FoodSection>,
        loader: ({ params }) => fetch(`https://chef-recipe-server-rezaul118255.vercel.app/category/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
