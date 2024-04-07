import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

function DoctorDetail({doctor}) {
    const socialMediaLsit=[
        {
            id:1,
            icon:'/fb.png',
            url:''
        },
        {
            id:2,
            icon:'/insta.png',
            url:''
        },{
            id:3,
            icon:'/linkd.png',
            url:''
        },{
            id:4,
            icon:'/yt.png',
            url:''
        },
    ]

  return (
    <div>
    
    <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
          {/* image */}
            <div>
                <Image className='rounded-lg h-[250px] w-full object-cover' src={doctor.attributes.image.data[0].attributes.url} width={200} height={200} alt="docImage" />
            </div>
            {/* doc info */}
            <div className='col-span-2 mt-5 md:px-8 flex flex-col gap-3 items-baseline'>
                <h2 className='font-bold text-2xl '>{doctor.attributes.Name}</h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <GraduationCap/>
                    <span>{doctor.attributes?.Year_of_experience} Years of experience</span>
                </h2>
                <h2 className='text-md flex gap-2 text-gray-500'>
                    <MapPin/>
                    <span>{doctor.attributes.Address}</span>
                </h2>
                <h2 className='text-[13px] bg-blue-100 p-1 rounded-lg px-2 text-primary'>{doctor.attributes?.categories.data[0]?.attributes?.Name}</h2>

                <div className='flex gap-3'>
                    {socialMediaLsit.map((item,index)=>(
                        <Image src={item.icon} key={index} width={30} height={30} alt='social'/>
                    ))}
                </div>
                <BookAppointment doctor={doctor}/>
            </div>
            {/* doc detaisl */}
        </div>
            <div className='p-3 border-[1px] rounded-lg mt-5'>
                <h2 className='font-bold text-[20px]'>About me</h2>
                <p className='text-gray-500 tracking-wide mt-2'>{doctor.attributes.About}</p>
            </div>

        </div>
  )
}

export default DoctorDetail