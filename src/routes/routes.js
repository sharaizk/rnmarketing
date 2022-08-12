import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

// Layout:
import Home from "../pages/Home";
import About from "pages/About";
import Services from "pages/Services";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);
}
