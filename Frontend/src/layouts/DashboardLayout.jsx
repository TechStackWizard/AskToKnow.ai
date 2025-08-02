import { useAuth } from '@clerk/react-router'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ChatList from '../component/ChatList';

const DashboardLayout = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  }, [userId, isLoaded, navigate])


  return (
    <div className='dashboard-layout flex gap-2 h-full'>
      <div className='menu grow shrink basis-0'><ChatList /></div>
      <div className='content grow-4 shrink basis-0'><Outlet /></div>
    </div>
  )
}

export default DashboardLayout