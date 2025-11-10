"use client"
import { findIP } from '@/actions/findip';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import LocationCo from '../Locationcomp/LocationCo';
import Loader from '../Loader/Loader';
export default function FindSec() {
  const [locationData, setLocation] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  interface inputs {
    ip: string;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<inputs>()

  async function  onSubmit(values: inputs) {
    setSubmitted(true); 
    setLoading(true);
  try {
    const response = await findIP(values.ip)
    console.log(response?.data);
    if (response?.data.length !== 0) {
      setLocation(response?.data)
      setLoading(false);
    }  else {
      setLocation(null); 
      setLoading(false);
    }
    
  } catch (error) {
    console.log(error);
    setLocation(null);
    setLoading(false);
  }
  }
  return (
    <>
    <div className='container py-40 lg:py-30 flex  items-center justify-center mx-auto bg-find'>
      
       <div className='bg-[#0000006e] w-[85%] lg:w-[60%] backdrop-blur-[4px] flex flex-col items-center justify-center py-15 rounded-4xl text-center'>
         <img className='w-[100px]' src="./Findicon.png" alt="Findicon" />
          <h3 className='text-[25px] text-white BebasNeue mt-5 mb-10'>Locate Your Ip</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto flex items-center justify-center' >

          <div className="input__container">
           <div className="shadow__input" />
           <input
            type="text"  
           className="input__search text-center bg-[#e1e1e1] BebasNeue placeholder:text-center placeholder:text-[18px]  text-black placeholder:text-[#000000ae] " 
           placeholder="What is your IP address?" 
           {...register("ip", { required: 'Ip Is Required' })}/>
           <button className="input__button__shadow">
           <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
             <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#17202A" />
              </svg>
           </button>
          
          </div>

          </form>
          {submitted && (
          <>
            {loading ? (
              <Loader />
            ) : locationData ? (
              <LocationCo location={locationData} />
            ) : (
              <p className="text-red-500 mt-5">Invalid IP Address. Please try again.</p>
            )}
          </>
        )}
       </div>
      
    </div>
    </>
  )
}
