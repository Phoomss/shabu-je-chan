import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'หน้าแรก', to: '/' },
    { label: 'เมนู', to: '/menu' },
    { label: 'โปรโมชั่น', to: '/promotion' },
    { label: 'เกี่ยวกับร้าน', to: '/about' },
  ]

  return (
    <nav className={`navbar navbar-expand-lg bg-white sticky-top transition ${scrolled ? 'shadow' : 'shadow-sm'}`}>
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2 text-dark" to="/">
          <img src="./logo.png" alt="ชาบูเจ๊จันทร์" style={{ width: 64, height: 64, objectFit: 'contain' }} />
          <div>
            <div className="lh-1">ชาบูเจ๊จันทร์</div>
            <div className="fw-normal text-muted" style={{ fontSize: '0.65rem' }}>ร้านชาบูสไตล์ตัวมัม</div>
          </div>
        </Link>

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
            {navLinks.map(({ label, to }) => (
              <li className="nav-item" key={to}>
                <Link
                  className={`nav-link fw-medium ${location.pathname === to ? 'text-danger fw-semibold' : 'text-dark'}`}
                  to={to}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="d-flex gap-2 mt-2 mt-lg-0">
            <Link to="/login" className="btn btn-outline-danger rounded-3 px-3">
              <i className="bi bi-person me-1" />
              เข้าสู่ระบบ
            </Link>
            <Link to="/apply" className="btn btn-danger rounded-3 px-3">
              <i className="bi bi-briefcase me-1" />
              พนักงาน
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar