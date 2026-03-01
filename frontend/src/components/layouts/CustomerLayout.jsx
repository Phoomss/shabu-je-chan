import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/CustomerMenu/Navbar'
import Footer from '../shared/CustomerMenu/Footer'
import  { CartProvider } from './../../contexts/CartContext';

const CustomerLayout = () => {
  return (
    <CartProvider>
      <div className='customer-layout'>
        <main>
          <Navbar />
          <Outlet />
          <Footer />
        </main>
      </div>
    </CartProvider>
  )
}

export default CustomerLayout