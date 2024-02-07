import React from 'react'
import img from '../../../assets/parking.webp'

function ParkingCard() {

  const booking = () =>{
    window.location.href= `/booking`
    console.log("booking")
  }
  return (
    <div>
     <div class="max-w-full bg-white my-1  flex  shadow dark:bg-white">
  
       <div className='w-[40%] p-4'>
       <img class="rounded-t-lg" src={img} 
         className='w-full h-full   rounded-lg '
        alt="" />
       </div>
   
      <div class="py-4 w-full">
       
          <div   className=' flex justify-between'>
            <div>
            <h3 class="  font-bold tracking-tight text-[16px] text-gray-900 ">Manik Complex</h3>
            <h3 class="  font-semibold tracking-tight text-sm text-gray-600 ">near Sikandra Crossing</h3>
            </div>
           <div>
            <h1 className='font-medium text-2xl px-2'>$25</h1>
            </div>
          </div>

        <p class="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400">25 miles away..</p>
        <div className='flex justify-between'>
          <button
          onClick={booking}
          ><h4 href="#" class="inline-flex items-center px-2 py-1  text-sm text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Book now
            
        </h4></button>
        <h1 className='text-sm text-green-700 px-2 '>available</h1>
        </div>
      </div>
</div>
    </div>
  )
}

export default ParkingCard
