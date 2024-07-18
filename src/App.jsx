import React from "react";
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
  PageNotFound
} from "./componets";


function App() {
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
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signin",
      element: <RegistrationPage />,
    },
  ]);

  return (
    <div className="relative z-0 bg-[#232323] text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
