import React from 'react';
import { UtensilsCrossed, ShoppingCart, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div 
      
      className="fixed-bottom w-100 bg-white d-flex justify-content-around align-items-center"
      style={{ 
        boxShadow: 'inset 0 2px 0 rgba(0, 0, 0, 0.1)', 
        padding: '10px',
        zIndex: 100,
        fontFamily: '"Kanit", sans-serif'
      }}
    >

      <NavLink 
        to="/menu" 
        className="text-decoration-none d-flex flex-column align-items-center justify-content-center bg-white border-0"
        style={({ isActive }) => ({
          color: isActive ? '#ff5722' : '#666666',
          fontSize: '12px'
        })}
      >
        {({ isActive }) => (
          <>
            <UtensilsCrossed size={20} color={isActive ? '#ff5722' : '#666666'} />
            <p className="m-0 mt-1">เมนู</p>
          </>
        )}
      </NavLink>

      <NavLink   
        to="/cart" 
        className="text-decoration-none d-flex flex-column align-items-center justify-content-center bg-white border-0"
        style={({ isActive }) => ({
          color: isActive ? '#ff5722' : '#666666',
          fontSize: '12px'
        })}
      >
        {({ isActive }) => (
          <>
            <ShoppingCart size={20} color={isActive ? '#ff5722' : '#666666'} />
            <p className="m-0 mt-1">ตะกร้า</p>
          </>
        )}
      </NavLink>

      <NavLink
        to="/time"
        className="text-decoration-none d-flex flex-column align-items-center justify-content-center bg-white border-0"
        style={({ isActive }) => ({
          color: isActive ? '#ff5722' : '#666666',
          fontSize: '12px'
        })}
      >
        {({ isActive }) => (
          <>
            <Clock size={20} color={isActive ? '#ff5722' : '#666666'} />
            <p className="m-0 mt-1">เวลา</p>
          </>
        )}
      </NavLink>

    </div>
  )
}

export default Footer;