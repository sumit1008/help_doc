"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {
  //backed

  const [categoryList,setCategoryList]=useState([])

  useEffect(
    ()=>{
      getCategoryList()
    },[]
  )
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      // console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }

  // const ulr = item.attributes?.Icon?.data.attributes?.url;

  //frontend


  return (
    <div>
    <div className='mb-10 items-center flex flex-col gap-4'>
        <h2 className='font-bold text-4xl'>Search <span className='text-primary'>Doctor</span></h2>
        <h2 className='text-gray-400 text-xl'>Search Your Doctor and Book Appointment</h2>
    
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search.." />
          <Button type="submit"><Search/> Search</Button>
        </div>

      {/* Display lsit of category */}
        <div  className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {categoryList.length > 0 ? categoryList.map((item,index)=>index<6&&(
        <Link key={index} href={'/search/'+item.attributes.Name}  className='flex flex-col text-center gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer mt-5'>
          {/* {console.log(item.attributes.Icon.data[0].attributes.url)} */}
          <Image src={item.attributes.Icon.data[0].attributes.url} alt='icon' height={40} width={40}/>
          <lable className='text-primary text-sm'>{item?.attributes?.Name}</lable>
        </Link >
      ))
      :
      //skeleton
      [1,2,3,4,5,6].map((item,index)=>(
        <div className='h-[100px] w-[100px] m-2  bg-slate-300 animate-pulse rounded-lg '>

    </div>
      ))
    }
        </div>
    </div>

    </div>
  )
}

export default CategorySearch