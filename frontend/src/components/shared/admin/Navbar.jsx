import React from 'react';
import { ChefHat } from 'lucide-react'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark px-4 py-2" style={{ backgroundColor: '#111111', borderBottom: '1px solid #333' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <div className="me-3">
            <ChefHat 
              size={35} 
              color="#dc3545" 
              fill="#000000" 
              strokeWidth={1.5} 
            />
          </div>

          <div>
            <h5 className="mb-0 fw-bold text-white" style={{ letterSpacing: '0.5px' }}>ชาบูเจ๊จันทร์</h5>
            <p className="mb-0 text-secondary" style={{ fontSize: '0.75rem' }}>แดชบอร์ดแอดมิน</p>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-light rounded-pill px-3 py-1 d-flex align-items-center gap-2"
            style={{ fontSize: '0.85rem', borderColor: '#3b3939' }}>
            <i className="bi bi-box-arrow-right"></i>
            <span>ออกจากระบบ</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;