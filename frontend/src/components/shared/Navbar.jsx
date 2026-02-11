import React, { useState } from 'react'; // เพิ่ม { useState } เข้าไปในปีกกา
import './navbar.css';
import { FaRegBell, FaCheckCircle } from "react-icons/fa";


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
            <img src="../../../public/logo.webp" alt="logo" className='image-logo' />
            <div>
              <h2>ชาบูเจ๊จันทร์</h2>
              <p>โต๊ะ 1 | Standard 499.-</p>
            </div>
          </div>
          <button className="btn-call-staff" onClick={handleCallStaff}><FaRegBell />&nbsp;เรียกพนักงาน</button>
        </nav>

        {/* alert custom */}
        {showAlert && (
          <div className={`custom-toast ${isClosing ? 'slide-up' : 'slide-down'}`}>
            <FaCheckCircle />&nbsp; เรียกพนักงานแล้ว กรุณารอซักครู่
          </div>
        )}
      </>

    );
  }

  export default Navbar