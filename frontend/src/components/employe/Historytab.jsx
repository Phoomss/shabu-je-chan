import React from 'react'
import { Clock } from 'lucide-react'
import orderHistory from '../../data/Orderhistory.json'

const statusConfig = {
    preparing: { label: 'กำลังเตรียม', badgeClass: 'text-danger bg-danger bg-opacity-10' },
    waiting: { label: 'รอรับ', badgeClass: 'text-warning bg-warning bg-opacity-10' },
    served: { label: 'เสิร์ฟแล้ว', badgeClass: 'text-success bg-success bg-opacity-10' },
}

const HistoryTab = () => {
    return (
        <div className="row g-4">
            {orderHistory.data.map((order) => {
                const { label, badgeClass } = statusConfig[order.status]
                const total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0)

                return (
                    <div className="col-12 col-md-6 col-xl-4" key={order.orderId}>
                        <div className="card border-0 shadow-sm rounded-4 p-3 h-100">

                            {/* Header */}
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="fw-bold mb-0">
                                    โต๊ะ {order.tableNumber} -{' '}
                                    <span className="text-muted fw-normal">#{order.orderId}</span>
                                </h6>
                                <span className={`badge rounded-pill fw-normal px-3 py-2 ${badgeClass}`}>
                                    {label}
                                </span>
                            </div>

                            {/* Time */}
                            <div className="text-muted small mb-3 d-flex align-items-center gap-1">
                                <Clock size={13} />
                                {order.time}
                            </div>

                            {/* Items */}
                            <div className="flex-grow-1 mb-3">
                                {order.items.map((item, i) => (
                                    <div key={i} className="d-flex justify-content-between small py-1 border-bottom border-light">
                                        <span className="text-dark">{item.name} x{item.qty}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="d-flex justify-content-between align-items-center pt-1">
                                <span className="text-muted small">รวม</span>
                                <span className="text-muted small">-</span>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HistoryTab