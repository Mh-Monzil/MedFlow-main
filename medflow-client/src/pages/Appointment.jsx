import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const Appointment = () => {
  const { user } = useAuth();

  const { data: allAppointment } = useQuery({
    queryKey: ["appointment"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/appointments`
      );
      // console.log(data);
      return data;
    },
  });
  console.log(allAppointment);

  const confirmAppointment = async (appointmentInfo, user) => {
    const {
      hospital_name,
      doctor_name,
      doctor_designation,
      appointment_time,
      payment,
      _id,
    } = appointmentInfo;

    const info = {
      appointmentId: _id,
      hospital_name,
      doctor_name,
      doctor_designation,
      appointment_time,
      payment
    };

    console.log(user);
    const patientEmail = user?.email;
    const patientUsername = user?.displayName;
    const appInfo = { ...info, patientEmail, patientUsername };
    console.log(appInfo);

    const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/booked-appointment`,appInfo);
    console.log(data.data);
    if (data.data.insertedId) {
      toast.success("Appointment Booked Successfully");
    }else{
      toast.error("Appointment already booked")
    }
  };

  const cancelAppointment = () => {
    console.log("cancel");
    toast.error("Appointment not booked");
  };

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
      <div className="max-w-6xl mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* card 1 */}
        {allAppointment?.map((appointment, idx) => {
          return (
            <div
              key={idx}
              className="w-[400px] md:w-[500px] mx-auto p-6 rounded-sm shadow-md hover:shadow-lg hover:shadow-primaryTeal/20 transition-all duration-300 ease-in-out"
            >
              <div className="flex gap-5">
                <img
                  src={appointment?.image_url}
                  alt=""
                  className="w-20 h-20 bg-primaryTeal"
                />
                <div className="flex-1">
                  <h4 className="text-2xl font-bold leading-none">
                    {appointment?.doctor_name}
                  </h4>
                  <p className="text-lg font-medium">
                    {appointment?.doctor_designation}
                  </p>
                  <p className="text-lg font-medium">
                    {appointment?.hospital_name}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRegCalendarCheck className="text-primaryTeal" />{" "}
                    {new Date(
                      appointment?.appointment_time
                    ).toLocaleDateString()}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdOutlineAccessTimeFilled className="text-primaryTeal" />{" "}
                    {new Date(
                      appointment?.appointment_time
                    ).toLocaleTimeString()}
                  </p>
                </div>
                <IoMdHeartEmpty className="w-12 h-12 p-2 rounded-md border border-primaryTeal text-primaryTeal cursor-pointer" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-2 border-primaryTeal font-bold"
                    >
                      Appointment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        Book Appointment
                      </DialogTitle>
                      <DialogDescription className="text-lg font-medium py-2">
                        Make sure you want to confirm the Appointment. Are sure?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose className="flex gap-2">
                        <Button
                          onClick={cancelAppointment}
                          type="button"
                          className="bg-rose-500"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => confirmAppointment(appointment, user)}
                          type="button"
                          className="bg-primaryTeal"
                        >
                          Confirm
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <p className="text-3xl font-bold">${appointment?.payment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appointment;
