import { MdOutlineMedicalServices } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { PiAmbulance } from "react-icons/pi";
import { RiUserHeartFill } from "react-icons/ri";

const BannerCard = () => {
  const cards = [
    {
      icon: <MdOutlineMedicalServices />,
      title: "Modern Equipment",
      des: "Our hospital features state-of-the-art medical equipment, ensuring precise diagnostics and advanced treatment for all patients.",
    },
    {
      icon: <FaUserMd />,
      title: "Qualified Doctors",
      des: "Our team consists of highly qualified and experienced doctors dedicated to providing top-notch medical care.",
    },
    {
      icon: <RiUserHeartFill />,
      title: "Individual Approach",
      des: "We tailor our healthcare services to meet each patient's unique needs, ensuring personalized and effective treatment.",
    },
    {
      icon: <PiAmbulance />,
      title: "Emergency Help",
      des: "We offer 24/7 emergency services, providing immediate medical attention when you need it the most.",
    },
    
  ];
  return <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-6">
    {cards.map((card, idx) => {
        return <div key={idx} className="relative group p-6 border overflow-hidden rounded-md">
          <span className="w-0 h-full absolute left-0 top-0 bg-primaryTeal/30 -z-10 group-hover:w-full transition-all duration-700"></span>
            <span className=" text-5xl text-primaryTeal">{card.icon}</span>
            <h4 className="text-xl font-medium pt-2 pb-1">{card.title}</h4>
            <p>{card.des}</p>
        </div>
    })}
  </div>;
};

export default BannerCard;
