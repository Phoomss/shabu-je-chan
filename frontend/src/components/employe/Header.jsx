import React from 'react'

const Header = () => {
  return (
    <nav className="navbar bg-dark px-3 py-2">
      <div className="d-flex align-items-center gap-2">
        <img src="../logo.png" alt="" style={{ width: 32, height: 32 }} />
        <div>
          <div className="fw-bold text-white lh-1">ชาบูเจ๊จันทร์</div>
          <div className="text-secondary" style={{ fontSize: '0.7rem' }}>ระบบจัดการพนักงาน</div>
        </div>
      </div>
    </nav>
  )
}

export default Header