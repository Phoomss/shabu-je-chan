import React, { useState } from 'react';
import { Bell, CircleCheck } from 'lucide-react';
import { useParams } from 'react-router';

function Navbar() {
  const [showAlert, setShowAlert] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { tableNumber } = useParams()

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
      <style>
        {`
          @keyframes slideDownAni {
            from { top: -100px; opacity: 0; }
            to { top: 20px; opacity: 1; }
          }
          @keyframes slideUpAni {
            from { top: 20px; opacity: 1; }
            to { top: -100px; opacity: 0; }
          }
        `}
      </style>

      <nav
        className="sticky-top d-flex justify-content-between align-items-center p-3"
        style={{
          backgroundColor: 'hsl(0 80% 44%)',
          boxShadow: 'inset 0 4px 0 rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          fontFamily: '"Kanit", sans-serif'
        }}
      >
        <div className="d-flex align-items-center text-white text-decoration-none" style={{ gap: '5px' }}>
          <img src="/logo.png" alt="logo" style={{ height: '50px', width: 'auto' }} />

          <div className="d-flex flex-column ps-1">
            <h2 className="m-0" style={{ fontSize: '14px', fontWeight: 'bold' }}>ชาบูเจ๊จันทร์</h2>
            <p className="m-0" style={{ fontSize: '12px', opacity: 0.8 }}>โต๊ะ {tableNumber} | Standard 499.-</p>
          </div>
        </div>

        <button
          className="d-flex justify-content-center align-items-center text-white border-0"
          style={{
            padding: '8px 12px',
            backgroundColor: isHovered ? 'hsl(0deg 0% 100% / 30%)' : 'hsl(0deg 0% 100% / 20%)',
            borderRadius: '15px',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: '"Kanit", sans-serif',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleCallStaff}
        >
          <Bell size={16} />&nbsp;เรียกพนักงาน
        </button>
      </nav>

      {showAlert && (
        <div
          className="position-fixed start-50 translate-middle-x d-flex align-items-center shadow"
          style={{
            top: '20px',
            minWidth: '316px',
            backgroundColor: 'hsl(107, 48%, 87%)',
            color: '#008A2E',
            padding: '15px 30px',
            borderRadius: '15px',
            zIndex: 9999,
            fontSize: '12px',
            fontFamily: '"Kanit", sans-serif',
            animation: isClosing ? 'slideUpAni 0.5s ease-in forwards' : 'slideDownAni 0.5s ease-out forwards'
          }}
        >
          <CircleCheck size={16} />&nbsp; เรียกพนักงานแล้ว กรุณารอซักครู่
        </div>
      )}
    </>
  );
}

export default Navbar;