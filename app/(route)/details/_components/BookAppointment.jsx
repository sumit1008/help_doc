import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from 'lucide-react';
import { DialogClose } from '@radix-ui/react-dialog';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookAppointment({ doctor }) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectTimeSlot, setSelectedTimeSlot] = useState();
    const [note, setNote] = useState(''); // Added state for note
    const { user } = useKindeBrowserClient();

    useEffect(() => {
        getTime();
    }, []);

    const saveBooking = () => {
        const data = {
            data: {
                UserName: user.given_name + " " + user.family_name,
                Email: user.email,
                Date: date,
                Time: selectTimeSlot,
                doctors: doctor.id,
                Note: note, // Using the note state here
            }
        }
        // console.log(data)
        GlobalApi.bookAppointment(data).then(resp => {
            // console.log(resp);
            if(resp){
                GlobalApi.sendEmail(data).then(rest=>{
                    console.log(resp);
                })
            toast("Booking info sent via mail")}
        })
    }

    const isPastDay = (day) => {
        return day < new Date();
    };

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({ time: i + ':00 AM' });
            timeList.push({ time: i + ':30 AM' });
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({ time: i + ':00 PM' });
            timeList.push({ time: i + ':30 PM' });
        }
        setTimeSlot(timeList);
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button className="mt-3 rounded-full">Book Appointment</Button>
            </DialogTrigger>
            <DialogContent>
                <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <DialogHeader className={'items-center'}>
                        <DialogTitle>Book Appointment</DialogTitle>
                        <DialogDescription>
                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
                                    <div className='flex flex-col items-baseline gap-3'>
                                        <h2 className='flex gap-2 items-center'>
                                            <CalendarDays className='text bg-primary h-5 w-5' />
                                            Select Day
                                        </h2>
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            disabled={isPastDay}
                                            className="rounded-md border"
                                        />
                                    </div>
                                    <div className='mt-3 md:mt-0'>
                                        <h2 className='flex gap-2 items-center mb-3'>
                                            <Clock className='text-primary h-5 w-5' />
                                            Select Time slot
                                        </h2>
                                        <div className='grid grid-cols-3 gap-2 border rounded-lg p-3'>
                                            {timeSlot?.map((item, index) => (
                                                <h2
                                                    key={index}
                                                    onClick={() => setSelectedTimeSlot(item.time)}
                                                    className={`p-2 border rounded-full text-center hover:bg-primary hover:text-white cursor-pointer ${item.time === selectTimeSlot && 'bg-primary text-white'}`}>
                                                    {item.time}
                                                </h2>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <form className="max-w-sm mx-auto">
                                    <textarea
                                        id="note"
                                        rows="4"
                                        className="mt-5 mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Note..."
                                        value={note} // Binding the value of textarea to note state
                                        onChange={(e) => setNote(e.target.value)} // Handling change in textarea
                                    ></textarea>
                                </form>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-end">
                        <DialogClose asChild>
                            <Button type="button" className="text-red-500 border-red-500" variant="outline">
                                Close
                            </Button>
                        </DialogClose>
                        <Button type="button" disabled={!(date && selectTimeSlot)} onClick={saveBooking}>
                            Submit
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default BookAppointment;
