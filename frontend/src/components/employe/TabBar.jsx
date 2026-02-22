// TabBar.jsx
import React from 'react'

const tabs = [
  { key: 'orders',  icon: 'bi-list-check',   label: 'รายการสั่ง', badge: 1 },
  { key: 'tables',  icon: 'bi-grid',          label: 'จัดการโต๊ะ' },
  { key: 'menu',    icon: 'bi-scissors',      label: 'จัดการเมนู' },
  { key: 'history', icon: 'bi-clock-history', label: 'ประวัติ' },
  { key: 'billing', icon: 'bi-credit-card',   label: 'คิดเงิน' },
]

const TabBar = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-bottom px-3 py-2">
      <div className="d-flex gap-2 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`btn d-flex align-items-center gap-2 rounded-3 px-3 py-2 fw-medium ${
              activeTab === tab.key ? 'btn-danger' : 'btn-outline-secondary border-1'
            }`}
          >
            <i className={`bi ${tab.icon}`} />
            {tab.label}
            {tab.badge && (
              <span className="badge bg-white text-danger rounded-pill ms-1">{tab.badge}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabBar