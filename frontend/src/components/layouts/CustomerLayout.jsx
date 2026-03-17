import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/CustomerMenu/Navbar'
import TabBar from '../shared/CustomerMenu/TabBar'
import { CartProvider } from './../../contexts/CartContext';

const CustomerLayout = () => {
  return (
    <CartProvider>
      <div className='customer-layout'>
        <main>
          <Navbar />
          <Outlet />
          <TabBar />
        </main>
      </div>
    </CartProvider>
  )
}

export default CustomerLayout