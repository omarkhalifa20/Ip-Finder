import { IpInterface } from '@/app/Interfaces/ipmodule'
import { log } from 'console'
import React from 'react'

export default function LocationCo({location} : {location:IpInterface}) {
   console.log(location , "location comp");
   
  return (
    <>
    <div className='grid w-[85%] items-center justify-center lg:gap-10 grid-cols-12 mt-14'>
   <div className=' col-span-12 lg:col-span-8'>
   <iframe
   className='rounded-3xl border-3 mb-10 lg:mb-0 border-[#13bfe3]'
  width="100%"
  height="300"
  loading="lazy"
  allowFullScreen
  src={`https://www.google.com/maps?q=${location?.latitude},${location?.longitude}&z=13&output=embed`}>
</iframe>
   </div>
   <div className='col-span-12 lg:col-span-4  items-center text-center lg:text-start'>
   <p className='text-white BebasNeue mb-4 text-[20px]'>IP Address : <span className='text-[#13bfe3]'>{location?.ip}</span></p>
     <p className='text-white BebasNeue mb-4 flex gap-2 items-center justify-center lg:justify-start  text-[20px]'>Country :  <span className='text-[#13bfe3]'>{location?.country_name}</span> <span><img className='w-[40px]' src={location?.location?.country_flag} alt="" /></span></p>
    <p className='text-white BebasNeue mb-4 text-[20px]'>Region : <span className='text-[#13bfe3]'>{location?.region_name}</span></p>
    <p className='text-white BebasNeue mb-4 text-[20px]'>City : <span className='text-[#13bfe3]'>{location?.city}</span></p>
    <p className='text-white BebasNeue mb-4 text-[20px]'>Latitude : <span className='text-[#13bfe3]'>{location?.latitude}</span></p>
    <p className='text-white BebasNeue  text-[20px]'>Longitude : <span className='text-[#13bfe3]'>{location?.longitude}</span></p>
   </div>
    </div>
    </>
  )
}
