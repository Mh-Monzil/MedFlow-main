import Logo from "./Logo";
import { FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationPin, MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-primaryDark mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* col-1  */}
        <div className="">
          <Logo />
          <p className="pt-3 pb-5 max-w-[400px]">
            Our family-centered approach to healthcare ensure that each member
            of your family receives personalized attention
          </p>
          <div className="flex items-center gap-4 text-2xl  ">
            <FaLinkedin className="cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out" />
            <FaYoutube className="cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out" />
            <FaTwitter className="cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out" />
            <FaSquareInstagram className="cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out" />
            <FaFacebookSquare className="cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        {/* col-2  */}
        <div className="font-medium">
          <p className="text-xl font-bold pb-4">Quick Links</p>
          <div className="flex flex-col space-y-2">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
          </div>
        </div>

        {/* col-3  */}
        <div className=" font-medium">
          <p className="text-xl font-bold pb-4">Contact Details</p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MdLocationPin />
              Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <RiMailSendFill />
              medflow@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              1234567890
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineAccessTimeFilled />8 AM - 10 PM, Monday - Saturday
            </p>
          </div>
        </div>

        {/* col-4  */}
        <div className="">
          <p className="text-xl font-bold pb-4">Subscribe To Our Newsletter</p>
          <p>
            Stay informed and never miss out on the latest news, health tips.
          </p>
          <div className="pt-4">
            <input type="email" className="bg-transparent border border-white rounded-s-md p-2" />
            <button className="bg-black text-white font-bold py-2 px-4 border border-black rounded-e-sm">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
