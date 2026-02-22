import React, { useState } from 'react'; 
import './navbar.css';
import { Bell, CircleCheck } from 'lucide-react';



function Navbar() {
  const [showAlert, setShowAlert] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCallStaff = () => {
    setShowAlert(true);
    setIsClosing(false);

    setTimeout(() => {
      setIsClosing(true); 
      
      setTimeout(() => {
        setShowAlert(false);
      }, 500); 
    }, 3000);
  };
    return (
      <>
        <nav className='navbar'>
          <div className='logo'>
            <img src="../../public/logo.png" alt="logo" className='image-logo' />
            <div className='text-logo'>
              <h2>ชาบูเจ๊จันทร์</h2>
              <p>โต๊ะ 1 | Standard 499.-</p>
            </div>
          </div>
          <button className="btn-call-staff" onClick={handleCallStaff}><Bell className='icon' />&nbsp;เรียกพนักงาน</button>
        </nav>

        {/* alert custom */}
        {showAlert && (
          <div className={`custom-toast ${isClosing ? 'slide-up' : 'slide-down'}`}>
            <CircleCheck className='icon'/>&nbsp; เรียกพนักงานแล้ว กรุณารอซักครู่
          </div>
        )}
      </>

    );
  }

  export default Navbar