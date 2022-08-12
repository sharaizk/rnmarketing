import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

// Layout:
import Home from "../pages/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);
}
