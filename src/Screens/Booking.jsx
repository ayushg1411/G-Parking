import React from 'react'
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import image from '.././assets/parking.webp'
import UserInfoForm from '../Components/BookingScreen/UserInfoForm';
import { FaArrowRight } from "react-icons/fa";

import 'react-datepicker/dist/react-datepicker.css';
import PaymentInfo from '../Components/BookingScreen/PaymentInfo';
function Booking() {
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
  return (
    <section className='flex min-h-screen '>
         <div className='w-2/3 flex-col px-32 '>
            <div className=' border-black w-full h-48 my-1  py-6'>
                <h1 className='font-light text-gray-800'>complete your booking process</h1>
                <h1 className='text-gray-800 text-xl font-bold px-2 my-2'>Omx Mall Area</h1>
                <div className=' flex bg-[#f0f4f9] p-2  rounded-lg h-24 justify-evenly items-center'>
              
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
            className="px-4 py-2 max-md:px-2  rounded-sm focus:outline-none focus:border-blue-500"
          />
          <h1 className='text-xl px-2 text-black'><FaArrowRight/></h1>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
            className="px-4 py-2 max-md:px-2  rounded-sm focus:outline-none focus:border-blue-500 "
          />
                </div>
                 </div>

            <div className='bg-[#fbfbfb]  border-gray-300 rounded-md flex h-80 my-2 justify-evenly  items-center'> 
           
              <UserInfoForm />

            </div>
             <div className='bg-[#fbfbfb]  border-gray-300 rounded-md flex h-80 my-2 justify-evenly  items-center'> 

              <PaymentInfo />

            </div>
            <div className='bg-gray-100  border-gray-300 rounded-md flex-row h-40 my-2 justify-evenly px-8 items-center'> 

           <h1 className='text-gray-800 font-semibold text-2xl py-3'>Payment Summary </h1>
         <div className='flex justify-between px-1 '>
         <h1 className='text-xl font-semibold'>Price </h1>
         <h1 className='text-xl font-bold'>$20</h1>
         </div>
         <button
             
            className="bg-blue-500 text-white px-4 mt-2  max-md:px-2 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Confirm Booking
          </button>

</div>

             </div>
         <div className='flex-row p-4 w-1/3 '>
            <img src={image} 
             className='w-72 h-96 mt-20 rounded-md'
            alt="" /> 
            <div className='flex-row w-3/4'>
                <h1 className='text-gray-700 py-2 text-xl font-bold'> Provided Facilities</h1>
                <h1 className='text-sm font-sans font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt, minima quisquam reprehenderit eius doloremque ut maxime possimus magni alias eligendi saepe. Exercitationem perferendis cupiditate incidunt reiciendis, iste earum ullam.</h1>

                <h1 className='text-sm font-sans py-2 font-light'>Please park within the timeframe on your pass. Parking outside your timeframe will incur additional fees. The garage allows 10 mins grace period on arrival and departure.</h1>
                <h1 className='text-2xl font-semibold text-green-600 w-3/4'>****</h1>
            </div>
            

             </div>

    </section>
  )
}

export default Booking
