import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function CategorySearch() {
  return (
    <div>
    <div className='mb-10 items-center flex flex-col gap-4'>
        <h2 className='font-bold text-4xl'>Search <span className='text-primary'>Doctor</span></h2>
        <h2 className='text-gray-400 text-xl'>Search Your Doctor and Book Appointment</h2>
    
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search.." />
      <Button type="submit"><Search/> Search</Button>
    </div>
    </div>
    </div>
  )
}

export default CategorySearch