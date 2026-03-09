import { ClipboardList, Grid, Scissors, History, CreditCard, Wrench } from 'lucide-react'

const tabs = [
  { key: 'orders',  icon: <ClipboardList size={16} />, label: 'รายการสั่ง', badge: 1 },
  { key: 'tables',  icon: <Grid size={16} />,          label: 'จัดการโต๊ะ' },
  { key: 'menu',    icon: <Scissors size={16} />,      label: 'จัดการเมนู' },
  { key: 'history', icon: <History size={16} />,       label: 'ประวัติ' },
  { key: 'billing', icon: <CreditCard size={16} />,    label: 'คิดเงิน' },
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
           <Wrench size={48} className="text-muted d-block mx-auto mb-2" />
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