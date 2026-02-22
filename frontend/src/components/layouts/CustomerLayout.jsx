import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/CustomerMenu/Navbar'
import Footer from '../shared/CustomerMenu/Footer'

const CustomerLayout = () => {
  return (
    <div>
      <main>
        <Navbar /> 
        <Outlet /> 
        <Footer />
      </main>
    </div>
  )
}

export default CustomerLayout