import React from 'react'

export default function About() {
  return (
    <>
    <div className='container pb-30 aboutbg  min-h-[100vh] flex items-center justify-center mx-auto '>
     <div className=' w-[95%] lg:w-[85%] backdrop-blur-[5px] mt-40 gap-y-12 lg:gap-0 grid grid-cols-12 p-10 lg:p-15 rounded-[60px] about-shadow '>
     <div
              className="card2 mx-auto col-span-12 lg:col-span-5  ">
            <div className="btn1" />
            <div className="btn2" />
             <div className="btn3" />
             <div className="btn4" />
               <div className="card-int shadow-[inset_0px_0px_15px_rgba(142,142,142,0.53)]">
              
            </div>
              <div className="top">
             <div className="camera">
              <div className="int" />
            </div>
             <div className="speaker" />
             </div>
              </div>

     <div className=' col-span-12 lg:col-span-7 flex flex-col justify-center items-start'>
        <h3 className='Fjalla mb-5 lg:mb-10 text-center text-[18px] lg:text-[40px] text-white'>IP Finder — What It Is and How It Works ?</h3>
        <p className='text-white text-[14px] lg:text-[16px]'>Welcome to IP Finder — your all-in-one IP lookup tool.
Our mission is to make it simple and fast to access accurate IP data. Using trusted public databases and geo-location services, IP Finder provides:

Country, city, and region

Internet Service Provider (ISP) and network name

Approximate coordinates (latitude & longitude)

Timezone and UTC offset

ASN (Autonomous System Number) details

IPv4 / IPv6 compatibility and status info

Whether you’re a developer analyzing user traffic, a system admin troubleshooting connections, or just curious about where an IP comes from — IP Finder gives you clear, instant, and reliable results.

We prioritize privacy: no sensitive user data is stored or shared. All information shown is collected from public databases and used responsibly.</p>
     </div>
              
     </div>
    
    </div>
    </>
  )
}
