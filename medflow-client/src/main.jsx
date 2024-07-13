import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./components/Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
// import { createBrowserRouter } from "react-router-dom";

// import Root from "./layouts/Root";
// import Home from "./pages/Home";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster/>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
