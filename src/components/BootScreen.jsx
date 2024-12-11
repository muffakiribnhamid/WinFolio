import React from 'react'
import Loader from './Loader'

const BootScreen = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-black h-screen w-screen'>
        <img src={'Logo.png'} className='h-20' alt="" />
        <div className="mt-20">
        <Loader/>
        </div>
    </div>
  )
}

export default BootScreen