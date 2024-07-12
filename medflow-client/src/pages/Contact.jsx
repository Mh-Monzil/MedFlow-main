import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { RiMailLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
    const contactInfo = [
        {
            icon: <SlLocationPin />,
            title: "Location",
            info: "Dhaka, Bangladesh"
        },
        {
            icon: <RiMailLine />,
            title: "Email",
            info: "medflow@gmail.com"
        },
        {
            icon: <IoCallOutline />,
            title: "Call",
            info: "+880 123456"
        },
    ]
  return (
    <div>
      <div className="bg-primaryTeal/40 h-64 flex items-center justify-center">
        <div className="text-center">
          <h4 className="text-5xl font-medium">Contact Us</h4>
          <p className="flex items-center justify-center gap-2 mt-3 text-lg">
            <Link to="/">Home </Link>
            <IoIosArrowForward />
            <span> Contact Us</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 mx-auto my-32">
        {
            contactInfo.map((info, idx) => {
                return <div key={idx} className="mx-auto flex flex-col items-center gap-3">
                    <span className="text-5xl text-primaryTeal">{info.icon}</span>
                    <p className="text-2xl text-gray-600 font-medium">{info.title}</p>
                    <p className="text-3xl font-bold">{info.info}</p>
                </div>
            })
        }
      </div>

      <div className="max-w-7xl mx-auto text-center p-4 md:p-10">
        <hr />
        <h3 className="text-3xl md:text-4xl font-bold mt-10">We&#39;d Love To Hear From You!</h3>
        <p className="text-lg font-normal py-3">We are here and always ready to help you. Let us know how we serve you and we’ll get back within no time.</p>
        <form className="max-w-4xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name" className="p-4 bg-teal-100 focus:outline-primaryTeal/50" />
            <input type="text" name="lastName" placeholder="Last Name" className="p-4 bg-teal-100 focus:outline-primaryTeal/50" />
            <input type="email" name="email" placeholder="Your Email" className="p-4 bg-teal-100 focus:outline-primaryTeal/50" />
            <input type="number" name="phone" placeholder="Phone Number" className="p-4 bg-teal-100 focus:outline-primaryTeal/50" />
            <textarea type="text" name="message" placeholder="Your Message" className="md:col-span-2 p-4 bg-teal-100 focus:outline-primaryTeal/50 h-40" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
