import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const MyAppointment = () => {
  const { user } = useAuth();
  const { data: myAppointment = [], refetch } = useQuery({
    queryKey: [" myAppointment", user?.email],
    queryFn: async () => {
      const data = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/booked-appointment/${user?.email}`
      );
      return data.data;
    },
  });

  const handleDelete = async (id) => {
    const {data} = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/my-appointment/${id}`
    );
    console.log(data);
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
          <TableHead className="">Hospital Name</TableHead>
          <TableHead>Doctor Name</TableHead>
          <TableHead className="text-left">Doctor Designation</TableHead>
          <TableHead className="text-left">Appointment Time</TableHead>
          <TableHead className="text-left">Payment</TableHead>
          <TableHead className="text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {myAppointment?.map((appointment) => (
          <TableRow key={appointment?._id}>
            <TableCell>{appointment?.hospital_name}</TableCell>
            <TableCell className="text-left">
              {appointment?.doctor_name}
            </TableCell>
            <TableCell className="text-left">
              {appointment?.doctor_designation}
            </TableCell>

            <TableCell className="text-left">
              {new Date(appointment?.appointment_time).toLocaleTimeString()}
            </TableCell>
            <TableCell className="text-left">${appointment?.payment}</TableCell>
            <TableCell className="text-center">
              <MdDelete onClick={() => handleDelete(appointment?._id)} className="mx-auto text-2xl cursor-pointer text-rose-500" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyAppointment;
