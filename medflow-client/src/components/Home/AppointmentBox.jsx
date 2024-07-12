import { Link } from "react-router-dom";
import { RiFirstAidKitFill } from "react-icons/ri";
import { MdOutlineEventAvailable } from "react-icons/md";

const AppointmentBox = () => {
  return (
    <div className=" py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
          <RiFirstAidKitFill className="text-7xl text-primaryDark" />
          <div className=" space-y-3 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold">Open For Appointments</h2>
            <p className="md:w-[500px] font-medium">
              We are delighted to announce that out doors are open, and we are
              now accepting appointments to serve you better.
            </p>
          </div>
        </div>
        <Link className="flex items-center justify-between gap-2 border-2 border-primaryTeal/30 px-5 py-2 rounded-3xl hover:bg-white hover:rounded-md transition-all duration-300">
          <span className=" font-semibold">Make Appointment</span>
          <MdOutlineEventAvailable className="text-2xl text-primaryDark" />
        </Link>
      </div>
    </div>
  );
};

export default AppointmentBox;
