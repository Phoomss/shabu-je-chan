import React, { useState } from 'react'
import CardTable from '../../components/employe/CardTable'
import mockTables from '../../data/table.json'

const tabs = [
  { key: 'orders', icon: 'bi-list-check', label: 'รายการสั่ง', badge: 1 },
  { key: 'tables', icon: 'bi-grid', label: 'จัดการโต๊ะ' },
  { key: 'menu', icon: 'bi-scissors', label: 'จัดการเมนู' },
  { key: 'history', icon: 'bi-clock-history', label: 'ประวัติ' },
  { key: 'billing', icon: 'bi-credit-card', label: 'คิดเงิน' },
]

const HomeEmploye = () => {
  const [activeTab, setActiveTab] = useState('orders')
  const [tables, setTables] = useState(mockTables.data)

  const handleDone = (tableNumber) => {
    setTables(prev => prev.filter(t => t.tableNumber !== tableNumber))
  }

  return (
    <div className="min-vh-100 bg-light">

      <div className="bg-white border-bottom px-3 py-2">
        <div className="d-flex gap-2 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`btn d-flex align-items-center gap-2 rounded-3 px-3 py-2 fw-medium ${activeTab === tab.key ? 'btn-danger' : 'btn-outline-secondary border-1'
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

      <div className="container-fluid p-4">
        {activeTab === 'orders' && (
          <div className="row g-4">
            {tables.map((table) => (
              <div className="col-12 col-md-6 col-xl-4" key={table.tableNumber}>
                <CardTable
                  {...table}
                  onDone={() => handleDone(table.tableNumber)}
                />
              </div>
            ))}
          </div>
        )}

        {activeTab !== 'orders' && (
          <div className="text-center text-muted py-5">
            <i className="bi bi-tools fs-1 d-block mb-2" />
            หน้านี้อยู่ระหว่างพัฒนา
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeEmploye