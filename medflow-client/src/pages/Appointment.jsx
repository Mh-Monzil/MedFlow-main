import PrimaryButton from "@/components/Shared/PrimaryButton";
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      <div className="bg-primaryTeal/40 h-64 flex items-center justify-center">
        <div className="text-center">
          <h4 className="text-5xl font-medium">Make Appointment</h4>
          <p className="flex items-center justify-center gap-2 mt-3 text-lg">
            <Link to="/">Home </Link>
            <IoIosArrowForward />
            <span>Appointment</span>
          </p>
        </div>
      </div>
      {/* appointment card  */}
      <div className="max-w-7xl mx-auto my-12">
        {/* card 1 */}
        <div className="w-96 p-6 rounded-sm shadow-md hover:shadow-lg hover:shadow-primaryTeal/20 transition-all duration-300 ease-in-out">
          <div className="flex gap-5">
            <img src="" alt="" className="w-20 h-20 bg-primaryTeal" />
            <div className="flex-1"> 
              <h4 className="text-2xl font-bold leading-none">Dr. Alina Roy</h4>
              <p className="text-lg font-medium">Cardiologist</p>
              <p className="text-lg font-medium">Dhaka Medical</p>
              <p className="flex items-center gap-2">
                <MdOutlineAccessTimeFilled className="text-primaryTeal" /> 10am - 12pm
              </p>
            </div>
            <IoMdHeartEmpty className="w-12 h-12 p-2 rounded-md border border-primaryTeal text-primaryTeal cursor-pointer" />
          </div>
          <div className="flex items-center justify-between mt-3">
            <PrimaryButton title={"Appointment"} />
            <p className="text-3xl font-bold">40$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
