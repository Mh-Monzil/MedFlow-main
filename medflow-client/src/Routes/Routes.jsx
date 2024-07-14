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
import PrivateRoute from "@/privateRoute/PrivateRoute";
import Dashboard from "./Dashboard";
import MyProfile from "@/components/Dashboard/MyProfile";

import MyAppointment from "@/components/Dashboard/PationRoutes/MyAppointment";
import Statistics from "@/components/Dashboard/AdminRoutes/Statistics";
import DoctorsList from "@/components/Dashboard/AdminRoutes/DoctorsList";
import BookedAppointment from "@/components/Dashboard/AdminRoutes/BookedAppointment";

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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: 
     
        <Dashboard />,
    
    
    children: [
      //user routes
      {
        path: "my-profile",
        element: <MyProfile/>
      },
      {
        path: "my-appointment",
        element: <MyAppointment/>
      },
      
      //admin routes
      {
        path: "statistics",
        element:<Statistics/>
      },
      
      {
        path: "doctors-list",
        element:<DoctorsList/>
      },
      {
        path: "appointment-list",
        element:<BookedAppointment/>
      },
      
      
    ],
  },
]);
