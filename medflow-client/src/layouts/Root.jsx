import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="font-roboto">
      <div className="px-4">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
