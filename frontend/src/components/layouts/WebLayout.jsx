import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../shared/footer'

const WebLayout = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default WebLayout