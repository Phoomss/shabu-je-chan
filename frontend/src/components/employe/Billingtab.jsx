import React, { useState } from 'react'
import { Users, CheckCircle } from 'lucide-react'
import { toast } from 'react-toastify'
import orderHistory from '../../data/Orderhistory.json'

const statusConfig = {
  preparing: { label: 'เตรียม',     badgeClass: 'text-danger bg-danger bg-opacity-10' },
  waiting:   { label: 'รอรับ',      badgeClass: 'text-warning bg-warning bg-opacity-10' },
  served:    { label: 'เสิร์ฟแล้ว', badgeClass: 'text-success bg-success bg-opacity-10' },
}

const toastSuccess = {
  style: {
    background: '#f0fdf4', color: '#166534',
    borderRadius: '12px', fontSize: '0.9rem',
    border: '1px solid #bbf7d0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
}

const BillingTab = () => {
  const [paid, setPaid] = useState([])

  const handlePay = (order) => {
    setPaid(prev => [...prev, order.orderId])
    toast.success(`ชำระเงินโต๊ะ ${order.tableNumber} เรียบร้อยแล้ว`, toastSuccess)
  }

  const unpaidOrders = orderHistory.data.filter(o => !paid.includes(o.orderId))

  return (
    <div className="row g-4">
      {unpaidOrders.map((order) => {
        const { label, badgeClass } = statusConfig[order.status]

        return (
          <div className="col-12 col-md-6 col-xl-4" key={order.orderId}>
            <div className="card border-0 shadow-sm rounded-4 p-3 h-100 d-flex flex-column">

              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">โต๊ะ {order.tableNumber}</h6>
                <div className="d-flex align-items-center gap-1 text-muted small">
                  <Users size={14} />
                  2 ที่นั่ง
                </div>
              </div>

              {/* Order card */}
              <div className="bg-light rounded-3 p-3 mb-3 flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small">#{order.orderId}</span>
                  <span className={`badge rounded-pill fw-normal px-3 py-1 small ${badgeClass}`}>
                    {label}
                  </span>
                </div>

                {order.items.map((item, i) => (
                  <div key={i} className="d-flex justify-content-between small py-1">
                    <span className="text-dark">{item.name} x{item.qty}</span>
                    <span className="text-muted">NaN .-</span>
                  </div>
                ))}

                <div className="d-flex justify-content-end mt-2">
                  <span className="text-muted small">-.</span>
                </div>
              </div>

              {/* Total */}
              <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                <span className="fw-semibold">ยอดรวม</span>
                <span className="fw-bold text-danger fs-5">NaN .-</span>
              </div>

              {/* Pay button */}
              <button
                className="btn btn-danger w-100 rounded-3 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                onClick={() => handlePay(order)}
              >
                <CheckCircle size={18} />
                คิดเงิน
              </button>

            </div>
          </div>
        )
      })}

      {/* Empty state */}
      {unpaidOrders.length === 0 && (
        <div className="col-12 text-center text-muted py-5">
          <CheckCircle size={48} className="d-block mx-auto mb-2 text-success" />
          <p className="fw-medium">ไม่มีรายการค้างชำระ</p>
        </div>
      )}
    </div>
  )
}

export default BillingTab