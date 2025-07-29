import { useAuth } from '@clerk/react-router'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ChatList from '../component/ChatList';

const Dashboardlayout = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  }, [userId, isLoaded, navigate])


  return (
    <div className='dashboard-layout flex gap-2 h-full'>
      <div className='menu flex-[1]'><ChatList /></div>
      <div className='content flex-[4] '><Outlet /></div>
    </div>
  )
}

export default Dashboardlayout