import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const BookedAppointment = () => {
  const { data: bookedAppointments = [], refetch } = useQuery({
    queryKey: ["appointment"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/booked-appointments`
      );
      // console.log(data);
      return data;
    },
  });

  const handleDelete = async (id) => {
    const {data} = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/delete-appointment/${id}`
    );
    if(data.deletedCount > 0) {
      toast.success("Appointment deleted successfully")
      refetch();
    }
  }

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="">
        <TableRow>
          <TableHead className="">Patient Name</TableHead>
          <TableHead>Patient Email</TableHead>

          <TableHead className="text-left">Doctor Name</TableHead>

          <TableHead className="text-left">Designation</TableHead>
          <TableHead className="text-left">Hospital</TableHead>
          <TableHead className="text-left">Appointment Time</TableHead>
          <TableHead className="text-left">Payment</TableHead>
          <TableHead className="text-left">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookedAppointments?.map((appointment) => (
          <TableRow key={appointment._id}>
            <TableCell className="font-medium  ">
              {appointment.patientUsername}
            </TableCell>
            <TableCell>{appointment.patientEmail}</TableCell>
            <TableCell className="text-left">
              {appointment.doctor_name}
            </TableCell>
            <TableCell className="text-left">
              {appointment.doctor_designation}
            </TableCell>

            <TableCell className="text-left">
              {appointment.hospital_name}
            </TableCell>
            <TableCell className="text-left">
              {new Date(appointment.appointment_time).toLocaleTimeString()}
            </TableCell>
            <TableCell className="text-center">
              ${appointment.payment}
            </TableCell>
            <TableCell className="text-center">
              <MdDelete
                onClick={() => handleDelete(appointment?._id)}
                className="mx-auto text-2xl cursor-pointer text-rose-500"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookedAppointment;
