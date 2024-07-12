import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "@/pages/About";
import Services from "@/pages/Services";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
// import Appointment from "@/pages/Appointment";
import Appointment from "@/pages/Appointment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/signin',
          element: <SignIn/>
        }
        ,
        {
          path: "/appointment",
          element: <Appointment />,
        },
      ],
    },
  ]);