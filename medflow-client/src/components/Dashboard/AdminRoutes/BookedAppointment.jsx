import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BookedAppointment = () => {

    const {data: boookedAppointments = []} = useQuery({
        queryKey: ['appointment'],
        queryFn: async () => {
          const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/booked-appointments`);
          // console.log(data);
          return data;
        }
      })
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
         
        </TableRow>
      </TableHeader>
      <TableBody>
        {boookedAppointments?.map((appointment) => (
          <TableRow key={appointment._id}>
            <TableCell className="font-medium  ">
                {appointment.patientUsername}
            </TableCell>
            <TableCell>{appointment.patientEmail}</TableCell>
            <TableCell className="text-left">{appointment.doctor_name}</TableCell>
            <TableCell className="text-left">{appointment.doctor_designation}</TableCell>
          
            <TableCell className="text-left">{appointment.hospital_name}</TableCell>
            <TableCell className="text-left">{new Date(appointment.appointment_time).toLocaleTimeString()}</TableCell>
            <TableCell className="text-center">${appointment.payment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
    );
};

export default BookedAppointment;