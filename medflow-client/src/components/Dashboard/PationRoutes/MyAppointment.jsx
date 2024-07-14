import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";



const MyAppointment = () => {
    const {user} = useAuth()
    const {data: myAppointment = []} = useQuery({
        queryKey: [' myAppointment', user?.email],
        queryFn: async ()=>{
            const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/booked-appointment/${user?.email}`)
            return data.data;
        }
    })

    console.log(myAppointment);
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
         
        </TableRow>
      </TableHeader>
      <TableBody>
        {myAppointment?.map((appointment) => (
          <TableRow key={appointment._id}>
            <TableCell>{appointment.hospital_name}</TableCell>
            <TableCell className="text-left">{appointment.doctor_name}</TableCell>
            <TableCell className="text-left">{appointment.doctor_designation}</TableCell>
            
            <TableCell className="text-left">{new Date(appointment.appointment_time).toLocaleTimeString()}</TableCell>
            <TableCell className="text-left">${appointment.payment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
    );
};

export default MyAppointment;



