import React from 'react'
import ProfileScreen from '../Screens/ProfileScreen';

function ProfileLayout({children}) {
  return (
    <div className=' flex flex-row justify-between  min-h-screen bg-blue-800'>
        <div className = 'w-[15%] p-4 bg-slate-200'>
            <ProfileScreen/>
        </div>
     
      {children}
    </div>
  )
}

export default ProfileLayout;
