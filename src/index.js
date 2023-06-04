import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Properties from "./routes/properties";
import Transactions from "./routes/transactions";
import Renters from "./routes/renters";
import CheckoutRoute from "./routes/checkoutRoute";
import LoginRoute from "./routes/LoginRoute";

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
  {
    path: "/checkout",
    element: <CheckoutRoute />,
  },
  {
    path: "/Login",
    element: <LoginRoute />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
