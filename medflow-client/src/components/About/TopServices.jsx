import { FaMicroscope, FaUserMd } from "react-icons/fa";
import { MdAssignmentTurnedIn, MdMedicalServices } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import PrimaryButton from "../Shared/PrimaryButton";

const cards = [
  {
    icon: <FaMicroscope />,
    title: "Modern Laboratory",
    des: "Our laboratory is equipped with the latest diagnostic equipment and automation systems ensuring precise.",
  },
  {
    icon: <FaUserMd />,
    title: "Experienced  Doctors",
    des: "We take pride in our team of experienced who are at the forefront of  delivering exceptional.",
  },

  {
    icon: <MdMedicalServices />,
    title: "Trusted Treatment",
    des: "Receive reliable and compassionate medical care anytime, day or night.",
  },
];

const cardContent = [
  {
    icon: <MdAssignmentTurnedIn />,
    title: "Patient Information",
    des: "I hereby give consent to and its healthcare professionals to provide medical treatment. ",
  },
  {
    icon: <MdAssignmentTurnedIn />,
    title: "Emergency Contact",
    des: "This application form is for informational purpose only and does not guarantee.",
  },

  {
    icon: <MdAssignmentTurnedIn />,
    title: "Medical History",
    des: "Our medical history is a vital piece of information that provides healthcare.",
  },
];
const TopServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-28">
      <div className="px-4 md:px-6 text-left">
        <h2 className="uppercase font-bold mb-4 text-primaryDark">
          Top Services
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
          We Are a Progressive Medical Clinic
        </h1>
      </div>

      {/* Card Section  */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:px-6">
        {cards.map((card, idx) => {
          return (
            <div
              key={idx}
              className="relative group p-6 border overflow-hidden rounded-md"
            >
              <span className="w-full h-0 absolute right-0 bottom-0 bg-primaryTeal/30 -z-10 group-hover:w-full group-hover:h-full  transition-all duration-700"></span>
              <span className=" text-5xl text-primaryTeal">{card.icon}</span>
              <h4 className="text-xl font-medium pt-2 pb-1">{card.title}</h4>
              <p className="text-gray-600">{card.des}</p>
            </div>
          );
        })}
      </div>

      <div className="my-4  px-4 md:px-6 mt-12 md:mt-28">
        <div className=" text-left">
          <h2 className="uppercase font-bold mb-4 text-primaryDark">
            Caring for the health of you and your family
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
            We Provide All Aspects of Medical Practice <br /> For Your Whole
            Family!
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 my-10">
          {/* left content */}
          <div className="lg:w-1/2 py-4">
            <h2 className="text-xl font-bold mb-10">
              Welcome to medflow, where we offer comprehensive medical care
              tailored to every member of your family.{" "}
            </h2>

            <p className="mb-8">
              Our dedicated team of healthcare professionals is committed to
              providing you and your loved ones with personalized and
              compassionate healthcare services. We understand the importance of
              family health.{" "}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-2 items-center text-xl">
                <IoIosCheckmarkCircle className="text-primaryTeal" />
                <span>Family-Centered Care</span>
              </div>

              <div className="flex gap-2 items-center text-xl">
                <IoIosCheckmarkCircle className="text-primaryTeal" />
                <span>Preventive Services</span>
              </div>
              <div className="flex gap-2 items-center text-xl">
                <IoIosCheckmarkCircle className="text-primaryTeal" />
                <span>Vaccinations and Immunizations </span>
              </div>
            </div>

            <PrimaryButton path={"/"} title="Get Started &rarr;" />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-4  ">
              {cardContent.map((content, idx) => (
                <div
                  className="border rounded-md px-2 py-4 md:px-4 md:py-8  "
                  key={idx}
                >
                  <div className="flex gap-2 sm:items-center">
                    <div>
                      <span className=" text-6xl text-primaryTeal">
                        {content.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="md:text-2xl font-medium pb-1">
                        {content.title}
                      </h4>
                      <p className="text-gray-600">{content.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
