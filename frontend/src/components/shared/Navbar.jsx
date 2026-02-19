import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">

          {/* Brand */}
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <img src="./logo.png" alt="" style={{ width: 64, height: 64 }} />
            ชาบูเจ๊จันทร์
          </a>

          {/* Hamburger */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarContent">

            {/* Nav links */}
            <ul className="navbar-nav ms-auto align-items-lg-center me-lg-3 gap-lg-1">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">หน้าแรก</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">เมนู</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">โปรโมชั่น</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">เกี่ยวกับร้าน</a>
              </li>
            </ul>

            {/* Action buttons */}
            <div className="d-flex gap-2 mt-2 mt-lg-0">
              <button className="btn btn-outline-danger">เข้าสู่ระบบ</button>
              <button className="btn btn-danger">พนักงาน</button>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar