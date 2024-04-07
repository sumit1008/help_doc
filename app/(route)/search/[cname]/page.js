"use client"
import DoctorList from '@/app/_components/DoctorList1';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function search({params}) {


  const [doctorList,setDoctorList]=useState([]);

  useEffect(()=>{
    // console.log(params)
    getDoctors();
  },[])


  const getDoctors=()=>{
    GlobalApi.getDoctorByCategory(params.cname).then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div>
      {/* <DoctorList heading={params.cname}
      doctorList={doctorList}
      /> */}
      <DoctorList
      heading={params.cname}
      doctorList={doctorList}
      />
      
    </div>
  )
}

export default search