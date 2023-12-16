import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/global.css";
import Homepage from "./pages/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
