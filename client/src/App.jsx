import React from 'react'
import Navbar from './component/navbar/navbar'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Home from "./view/home/home";
import Gigs from "./view/gigs/Gigs";
import Gig from "./view/gig/Gig";
import Login from "./view/login/Login";
import Register from "./view/register/Register";
import Add from "./view/add/Add";
import Orders from "./view/orders/Orders";
import Messages from "./view/messages/Messages";
import Message from "./view/message/Message";
import MyGigs from "./view/myGigs/MyGigs";
import './app.scss'


function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
