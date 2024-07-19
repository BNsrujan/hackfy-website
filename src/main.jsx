import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Hero,
  Nav,
  FAQs,
  Footer,
  Number,
  Team,
  Project,
  Wedo,
  Services,
  ClientSlider,
  Path,
  LoginPage,
  RegistrationPage,
  MouseFollow,
  PageNotFound,
  Contact,
  ResetPassword
} from "./componets";



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
      <Nav />
          <Hero />
          <About />
          <Project />
          <Services />
          
          <FAQs />
          <Number />
          <ClientSlider/>
          
      <Footer />

        </>
      ),
      errorElement:<LoginPage />,
    },
    {
      path:'/about',
      element:<><Nav/><About/><Footer/></>
    },
    {
      path:'/services',
      element:<><Nav/><Services/><Footer/></>
    },
    {
      path:'/project',
      element:<><Nav/><Project/><Footer/></>
    },
    {
      path:'/contact',
      element:<><Nav/><Contact/><Footer/></>
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <RegistrationPage />,
    },
    {
      path: "/PReset",
      element: <ResetPassword />,
    },
  ]);

  




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="relative z-0 bg-[#232323] text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
