"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { useEffect,useState } from "react";
import GlobalApi from '../_utils/GlobalApi';

function DoctorList({doctorList,heading='Doctors'}) {
  //   const [doctorList,setDoctorList]=useState([]);

  // useEffect(
  //   ()=>{
  //     getDoctorList();
  //   }
  // ,[])

  // const getDoctorList=()=>{
  //   GlobalApi.getDoctorList().then(resp=>{
  //   //   console.log(resp.data.data);
  //     setDoctorList(resp.data.data);
  //   })
  // }

  return (
    <div className='mb-10 px-10'>
        <h2 className='font-bold text-primary text-2xl'>{heading}</h2>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4'>
            {  doctorList.length >0  ?doctorList.map((doctor,index)=>index<8&&(
                <div key={index} className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary' >
                    <Image src={doctor.attributes.image.data[0].attributes.url} alt='doc' width={500} height={400}
                    className='h-[200px] w-full object-cover rounded-lg'/>
                    <div className='mt-3 items-baseline flex flex-col gap-2'>
                        {/* {console.log(doctor.attributes.categories.data[0].attributes)} */}
                        <h2 className='text-[13px] bg-blue-100 p-1 rounded-lg px-2 text-primary'>{doctor.attributes?.categories.data[0]?.attributes?.Name}</h2>
                        <h2 className='font-bold'>{doctor.attributes?.Name}</h2>
                        <h2 className='text-primary text-sm'>{doctor.attributes?.Year_of_experience} Years</h2>
                        <Link href={'/details/'+doctor?.id} className="w-full">
                        
                        <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white' >Book now</h2>
                        </Link>
                    </div>
                </div>
                
            ))
          :
              // skelleton
            [1,2,3,4].map((item,index)=>(
              <div key={index} className='h-[220px] bg-slate-200 w-full rounded-lg '>

          </div>
            ))

          
          }
        </div>
    </div>
  )
}

export default DoctorList