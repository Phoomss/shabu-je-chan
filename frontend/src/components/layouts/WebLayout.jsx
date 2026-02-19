import React from 'react'
import Navbar from './../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const WebLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default WebLayout