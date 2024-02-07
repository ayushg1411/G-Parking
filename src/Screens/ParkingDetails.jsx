import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ParkingCard from '../Components/LandingScreenComponent/ParkingDetails/ParkingCard';
import Footer from '../Components/Footer';

function ParkingDetails() {
  const [locationValue, setLocationValue] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const { location } = useParams();
 const Latitude= 40.7128
 const Longitude= -74.0060

  useEffect(() => {
    setLocationValue(location);
  }, [location]);

  const handleSearch = () => {
    console.log("API called with location:", locationValue);
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
  };

  return (
    <div className='bg-slate-100'>
<div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2  bg-purple-600 z-10">
        <h1 className='text-white font-medium max-md:hidden'>Search for your nearby Parking Spot</h1>
        <input
          type="text"
          placeholder="Search by city, market, etc."
          onChange={(e) => setLocationValue(e.target.value)}
          value={locationValue}
          className="px-4 py-2 max-md:px-2 border rounded-sm focus:outline-none focus:border-blue-500 ml-2"
        />
        <div className="flex">
        <h1 className='text-white px-2 font-medium mt-2 max-md:hidden'>From</h1>
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
            className="px-4 py-2 max-md:px-2  rounded-sm focus:outline-none focus:border-blue-500"
          />
        <h1 className='text-white px-2 mt-2 font-medium max-md:hidden'>To</h1>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
            className="px-4 py-2 max-md:px-2  rounded-sm focus:outline-none focus:border-blue-500 "
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-gray-900 text-white px-4 max-md:px-2 py-2 rounded-md hover:bg-blue-600 hover:text-black transition duration-300"
        >
          Search
        </button>
      </div>
      <div className=' h-14'>
      </div>
      <div className='flex   '>
        <div className='w-1/4 max-h-[800px]  overflow-y-auto '>
        <div className='overflow-y-auto'>
        <ParkingCard />
          <ParkingCard />
          <ParkingCard />
          <ParkingCard />
          <ParkingCard />
          <ParkingCard />
          <ParkingCard />
          <ParkingCard />
        </div>
          
        </div>
        <div className='w-3/4 '>
          <iframe
          className='w-full h-full'
        title="Map"
       
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${Longitude - 0.01}%2C${Latitude - 0.01}%2C${Longitude + 0.01}%2C${Latitude + 0.01}&amp;layer=mapnik`}
        style={{ border: '1px solid black' }}
      ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ParkingDetails;
