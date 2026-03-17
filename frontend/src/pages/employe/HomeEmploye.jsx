import React, { useState } from 'react'
import { ClipboardList, Grid, Scissors, History, CreditCard, Wrench } from 'lucide-react'
import CardTable from '../../components/employe/CardTable'
import CardTableStatus from '../../components/employe/CardTableStatus'
import TableLegend from '../../components/employe/TableLegend'
import MenuManage from '../../components/employe/MenuManage'
import mockTables from '../../data/table.json'
import mockStatusTables from '../../data/tableStatus.json'
import HistoryTab from '../../components/employe/Historytab'
import BillingTab from '../../components/employe/Billingtab'

const tabs = [
  { key: 'orders', icon: <ClipboardList size={16} />, label: 'รายการสั่ง', badge: 1 },
  { key: 'tables', icon: <Grid size={16} />, label: 'จัดการโต๊ะ' },
  { key: 'menu', icon: <Scissors size={16} />, label: 'จัดการเมนู' },
  { key: 'history', icon: <History size={16} />, label: 'ประวัติ' },
  { key: 'billing', icon: <CreditCard size={16} />, label: 'คิดเงิน' },
]

const HomeEmploye = () => {
  const [activeTab, setActiveTab] = useState('orders')
  const [tables, setTables] = useState(mockTables.data)
  const [statusTables, setStatusTables] = useState(mockStatusTables.data)

  const handleDone = (tableNumber) => {
    setTables(prev => prev.filter(t => t.tableNumber !== tableNumber))
  }

  const handleChangeStatus = (tableNumber) => {
    setStatusTables(prev => prev.map(t => {
      if (t.tableNumber !== tableNumber) return t
      const next = { available: 'occupied', occupied: 'reserved', reserved: 'available' }
      return { ...t, status: next[t.status] }
    }))
  }

  return (
    <div className="min-vh-100 bg-light">

      {/* Tab bar */}
      <div className="bg-white border-bottom px-3 py-2">
        <div className="d-flex gap-2 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`btn d-flex align-items-center gap-2 rounded-3 px-3 py-2 fw-medium ${activeTab === tab.key ? 'btn-danger' : 'btn-outline-secondary border-1'
                }`}
            >
              {tab.icon}
              {tab.label}
              {tab.badge && (
                <span className="badge bg-white text-danger rounded-pill ms-1">{tab.badge}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="container-fluid p-4">

        {/* รายการสั่ง */}
        {activeTab === 'orders' && (
          <div className="row g-4">
            {tables.map((table) => (
              <div className="col-12 col-md-6 col-xl-4" key={table.tableNumber}>
                <CardTable {...table} onDone={() => handleDone(table.tableNumber)} />
              </div>
            ))}
          </div>
        )}

        {/* จัดการโต๊ะ */}
        {activeTab === 'tables' && (
          <div>
            <TableLegend />
            <div className="row g-3">
              {statusTables.map(t => (
                <div className="col-6 col-md-4 col-xl-3" key={t.tableNumber}>
                  <CardTableStatus
                    {...t}
                    onChangeStatus={() => handleChangeStatus(t.tableNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* จัดการเมนู */}
        {activeTab === 'menu' && <MenuManage />}
        {activeTab === 'history' && <HistoryTab />}
        {activeTab === 'billing' && <BillingTab />}

        {activeTab !== 'orders' && activeTab !== 'tables' &&
          activeTab !== 'menu' && activeTab !== 'history' &&
          activeTab !== 'billing' && (
            <div>...หน้านี้อยู่ระหว่างพัฒนา</div>
          )}

      </div>
    </div>
  )
}

export default HomeEmploye