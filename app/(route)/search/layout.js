import React from 'react'
import Categorylist from './_components/Categorylist'

function layout({children}) {
  return (

    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>
        {/* //category */}
        <Categorylist/>
      </div>

      <div className='col-span-3 md:col-span-3'>
        {children}
      </div>

    </div>
  )
}

export default layout