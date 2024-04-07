"use client"
import React from 'react'
import Image from 'next/image'
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import Cancel from './Cancel';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';


function BookingList({ bookingList ,expired,updateRecord}) {

    const onDeleteBooking=(item)=>{
        console.log(item);
        GlobalApi.deleteBooking(item.id).then(resp=>{
            if(resp){
                toast('Booking deleted Successfully')
                updateRecord()
            }
        })
    }

    return (
        <div >
            {bookingList && bookingList.map((item,index)=>(
                <div className='flex gap-4 items-center border p-5 m-3 rounded-lg border-black'   key={index}>
                    <Image width={70} height={70} alt='doc' className='rounded-full object-cover  h-[70px] w-[70px]' src={item.attributes.doctors.data[0].attributes.image.data[0].attributes.url}/>
                    <div className='flex flex-col gap-2 w-full' key={index}>
                        <h2 className='font-bold text-[18px] items-center flex justify-between'>{item.attributes.doctors.data[0].attributes.Name}
                        {!expired&& <Cancel onContinueClick={()=>onDeleteBooking(item)}/>}
                        </h2>
                        <h2 className='flex gap-2'><MapPin className='text-primary'/> {item.attributes.doctors.data[0].attributes.Address}</h2>
                        <h2 className='flex gap-2'>
                            <CalendarDays className='text-primary'/> Appointment on {moment(item.attributes.Date).format('DD-MMM-YYYY')}
                        </h2>
                        <h2 className='flex gap-2'>
                            <Clock className='text-primary' /> At Time : {item.attributes.Time}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    )
}
//4 : 44
export default BookingList