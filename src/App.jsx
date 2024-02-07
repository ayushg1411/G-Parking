import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingScreen from './Screens/LandingScreen'
import Main from './Components/LandingScreenComponent/Main'
import Layout from './Layout/Layout'
import About from './Screens/About'
import Login from './Screens/Login'
import ParkingDetails from './Screens/ParkingDetails'
import SignUp from './Screens/SignUp'
import Contacy from './Screens/Contacy'
import Booking from './Screens/Booking'
import ProfileScreen from './Screens/ProfileScreen'
import UserBookings from './Components/ProfileComponents/UserBookings'
import ProfileLayout from './Layout/ProfileLayout'
import UserInfo from './Components/ProfileComponents/UserInfo'
import UserVehicle from './Components/ProfileComponents/UserVehicle'

function App() {


  return (
      <>
       <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Layout><Contacy /></Layout>} />
        <Route path="/signup" element={< SignUp />} />
        <Route path="/details/:location" element={< ParkingDetails />} />
        <Route path="/booking" element={< Booking />} />
        <Route path="/profile" element={ <ProfileLayout><UserInfo/></ProfileLayout> } />

        <Route path="/my-bookings" element={ <ProfileLayout><UserBookings/></ProfileLayout> } />

        <Route path="/my-vehicle" element={ <ProfileLayout><UserVehicle/></ProfileLayout> } />





      </Routes>
    </Router>
      </>
  )
}

export default App
