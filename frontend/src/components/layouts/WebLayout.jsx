import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/Navbar' // Import เข้ามาที่นี่แทน

const WebLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </div>
  )
}

export default WebLayout