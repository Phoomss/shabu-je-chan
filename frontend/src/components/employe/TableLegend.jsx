import React from 'react'
import { Circle } from 'lucide-react'

const TableLegend = () => (
  <div className="d-flex gap-3 align-items-center mb-3 small">
    <span className="d-flex align-items-center gap-1">
      <Circle size={10} fill="#198754" color="#198754" /> ว่าง
    </span>
    <span className="d-flex align-items-center gap-1">
      <Circle size={10} fill="#dc3545" color="#dc3545" /> กำลังใช้
    </span>
    <span className="d-flex align-items-center gap-1">
      <Circle size={10} fill="#ffc107" color="#ffc107" /> จอง
    </span>
  </div>
)

export default TableLegend