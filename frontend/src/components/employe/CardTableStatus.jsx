import React, { useState } from 'react'
import { Users, QrCode, X } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

const statusConfig = {
  available: { label: 'ว่าง', bg: 'bg-success bg-opacity-10', badgeColor: '#198754', border: 'border-success' },
  occupied: { label: 'กำลังใช้', bg: 'bg-danger bg-opacity-10', badgeColor: '#dc3545', border: 'border-danger' },
  reserved: { label: 'จอง', bg: 'bg-warning bg-opacity-10', badgeColor: '#e6a800', border: 'border-warning' },
}

const CardTableStatus = ({ tableNumber, seats, status = 'available', onChangeStatus }) => {
  const config = statusConfig[status]
  const [showQR, setShowQR] = useState(false)

  const orderUrl = `${window.location.origin}/order/${tableNumber}`

  return (
    <>
      <div className={`card border ${config.border} border-opacity-50 ${config.bg} rounded-4 p-3 text-center`}>
        <h6 className="fw-bold mb-2">โต๊ะ {tableNumber}</h6>

        <span
          className="badge rounded-pill px-3 py-1 mb-3 fw-normal"
          style={{ background: `${config.badgeColor}22`, color: config.badgeColor }}
        >
          {config.label}
        </span>

        <div className="text-muted small mb-3 d-flex align-items-center justify-content-center gap-1">
          <Users size={14} />
          {seats} ที่นั่ง
        </div>

        <hr className="my-2" />

        <button
          className="btn btn-link text-decoration-none small fw-medium p-0 mb-2"
          style={{ color: config.badgeColor }}
          onClick={onChangeStatus}
        >
          เปลี่ยนสถานะ
        </button>

        {status === 'occupied' && (
          <>
            <hr className="my-2" />
            <button
              className="btn btn-link text-decoration-none text-danger small fw-medium p-0 d-flex align-items-center justify-content-center gap-1"
              onClick={() => setShowQR(true)}
            >
              <QrCode size={14} />
              แสดง QR Code
            </button>
          </>
        )}
      </div>

      {/* QR Modal */}
      {showQR && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: 'rgba(0,0,0,0.5)', zIndex: 9999 }}
          onClick={() => setShowQR(false)}
        >
          <div
            className="bg-white rounded-4 p-4 text-center shadow-lg"
            style={{ width: 280 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">QR Code โต๊ะ {tableNumber}</h6>
              <button
                className="btn btn-sm btn-light rounded-circle p-1 d-flex"
                onClick={() => setShowQR(false)}
              >
                <X size={16} />
              </button>
            </div>

            {/* QR Code */}
            <div className="d-flex justify-content-center mb-3">
              <QRCodeSVG
                value={orderUrl}
                size={180}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin
              />
            </div>

            <p className="text-muted small mb-3">
              สแกนเพื่อสั่งอาหารโต๊ะ {tableNumber}
            </p>

            {/* Copy Link */}
            <button
              className="btn btn-outline-danger w-100 rounded-3 small d-flex align-items-center justify-content-center gap-2"
              onClick={() => {
                navigator.clipboard.writeText(orderUrl)
                setShowQR(false)
              }}
            >
              <QrCode size={14} />
              คัดลอกลิงก์
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CardTableStatus