import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Properties from "./routes/properties";
import Transactions from "./routes/transactions";
import Renters from "./routes/renters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/renters",
    element: <Renters />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
