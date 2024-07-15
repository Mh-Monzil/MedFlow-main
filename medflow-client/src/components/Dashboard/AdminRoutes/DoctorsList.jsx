import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const DoctorsList = () => {
    const {data: allAppointment = [], refetch} = useQuery({
        queryKey: ['appointment'],
        queryFn: async () => {
          const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/appointments`);
          // console.log(data);
          return data;
        }
      })


      // const handleDelete = async (id) => {
      //   const {data} = await axios.delete(
      //     `${import.meta.env.VITE_BASE_URL}/delete-doctor/${id}`
      //   );
      //   if(data.deletedCount > 0) {
      //     toast.success("Doctor deleted successfully")
      //     refetch();
      //   }
      // }


    return (
        <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="">
        <TableRow>
          <TableHead className="w-[100px]">Photo</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-left">Email</TableHead>
          <TableHead className="text-left">Designation</TableHead>
          <TableHead className="text-left">Hospital</TableHead>
          <TableHead className="text-left">Appointment Time</TableHead>
          <TableHead className="text-left">Payment</TableHead>
          {/* <TableHead className="text-left">Delete</TableHead> */}
         
        </TableRow>
      </TableHeader>
      <TableBody>
        {allAppointment?.map((appointment) => (
          <TableRow key={appointment._id}>
            <TableCell className="font-medium">
                <img src={appointment.image_url} alt="" />
            </TableCell>
            <TableCell>{appointment.doctor_name}</TableCell>
            <TableCell className="text-left">{appointment.doctor_email}</TableCell>
            <TableCell className="text-left">{appointment.doctor_designation}</TableCell>
            <TableCell className="text-left">{appointment.hospital_name}</TableCell>
            <TableCell className="text-left">{new Date(appointment.appointment_time).toLocaleTimeString()}</TableCell>
            <TableCell className="text-center">${appointment.payment}</TableCell>
            {/* <TableCell className="text-center">
            <MdDelete onClick={() => handleDelete(appointment?._id)} className="mx-auto text-2xl cursor-pointer text-rose-500" />
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
    );
};

export default DoctorsList;