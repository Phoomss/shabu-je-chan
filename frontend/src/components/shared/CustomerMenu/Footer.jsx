import React from 'react'
import { UtensilsCrossed, ShoppingCart, Clock } from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='container-footer'>

      <NavLink 
        to="/menu" 
        className={({ isActive }) => `btn-menu ${isActive ? 'active' : ''}`}
      >
        <UtensilsCrossed className='icon'/>
        <p>เมนู</p>
      </NavLink>

      <NavLink   
        to="/cart" 
        className={({ isActive }) => `btn-menu ${isActive ? 'active' : ''}`}
      >
        <ShoppingCart className='icon'/>
        <p>ตะกร้า</p>
      </NavLink>

      <NavLink
        to="/time"
        className={({ isActive }) => `btn-menu ${isActive ? 'active' : ''}`}
      >
        <Clock className='icon'/>
        <p>เวลา</p>
      </NavLink>
    </div>
    </>

  )
}

export default Footer