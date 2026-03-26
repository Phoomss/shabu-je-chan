import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Clock, ChevronRight } from 'lucide-react'

const statusConfig = {
    preparing: { label: 'กำลังเตรียม', badgeClass: 'text-danger bg-danger bg-opacity-10' },
    waiting: { label: 'รอรับออเดอร์', badgeClass: 'text-warning bg-warning bg-opacity-10' },
    served: { label: 'เสิร์ฟแล้ว', badgeClass: 'text-success bg-success bg-opacity-10' },
}

const actionConfig = {
    preparing: { label: 'เสิร์ฟแล้ว', next: 'waiting', toastMsg: 'อัพเดทสถานะเป็น "เสิร์ฟแล้ว"', toastType: 'success' },
    waiting: { label: 'รับออเดอร์', next: 'served', toastMsg: 'อัพเดทสถานะเป็น "รับออเดอร์"', toastType: 'success' },
    served: { label: 'เสร็จสิ้น', next: 'success', toastMsg: 'อัพเดทสถานะเป็น "เสร็จสิ้น"', toastType: 'success' },
}

const toastConfig = {
    style: {
        background: '#f0fdf4',
        color: '#166534',
        borderRadius: '12px',
        fontSize: '0.9rem',
        border: '1px solid #bbf7d0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    },
}

const CardTable = ({ tableNumber = 1, timeAgo = '30 นาทีก่อน', initialStatus = 'preparing', items = [], onDone }) => {
    const [status, setStatus] = useState(initialStatus)

    const { label, badgeClass } = statusConfig[status]
    const action = actionConfig[status]

    const handleAction = () => {
        if (action.next) {
            setStatus(action.next)
        }
        toast[action.toastType](
            `โต๊ะ ${tableNumber} — ${action.toastMsg}`,
            toastConfig
        )

        if (action.next === 'success') {
            onDone?.()
        }
    }

    return (
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">โต๊ะ {tableNumber}</h6>
                <span className={`badge rounded-pill fw-normal px-3 py-2 ${badgeClass}`}>{label}</span>
            </div>

            {/* Time */}
            <div className="text-muted small mb-3 d-flex align-items-center gap-1">
                <Clock size={13} />
                {timeAgo}
            </div>

            {/* Items */}
            <div className="flex-grow-1 mb-3">
                {items.map((item, i) => (
                    <div key={i} className="d-flex justify-content-between small py-1 border-bottom border-light">
                        <span className="text-dark">{item.name}</span>
                        <span className="text-muted fw-medium">x{item.qty}</span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-muted small">-</span>
                <button
                    className="btn btn-danger rounded-3 px-4 d-flex align-items-center gap-1"
                    onClick={handleAction}
                    disabled={action.next === null}
                >
                    {action.label} <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default CardTable