import React from 'react'

export default function Main() {
  return (
    <>
    <div className="container relative min-h-[100vh] overflow-y-hidden   mx-auto bg-[#030406] ">
    <img className=' left-[50%]  z-[5]  translate-x-[-50%] head-shadow  bottom-[-200px]  absolute h-[65vh]   lg:h-[100vh]' src="/mainimg.webp" alt="" />
     <div className='w-[85%] relative h-[75vh] z-[99] flex-col flex justify-center items-center  mx-auto'>
      <h1 className=' Fjalla text-center text-[#fff] textshadow text-[40px] lg:text-[80px]'>IP FINDER APP</h1>
      <p className='text-[#ffffff] text-center  text-[14px] lg:text-[16px]'>Find the location of any IP address worldwide — fast, accurate, and easy to use.</p>
     </div>
    </div>
    
    </>
  )
}
