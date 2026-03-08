import React from 'react';
import StatCard from '../../components/cards/StatCard';

const AdminDashborad = () => {

  const stats = [
    { title: "ยอดขายรวม", total: "0", unit: ".-", footer: "จากออเดอร์ที่จบแล้ว", iconClass: "bi-currency-dollar", iconBg: "bg-success bg-opacity-10", iconColor: "text-success" },
    { title: "ยอดรอเก็บ", total: "NaN", unit: ".-", footer: "จากออเดอร์ที่ยังไม่จบ", iconClass: "bi-graph-up", iconBg: "bg-warning bg-opacity-10", iconColor: "text-warning" },
    { title: "จำนวนออเดอร์", total: "3", footer: "0 เสร็จ / 3 กำลังดำเนินการ", iconClass: "bi-cart", iconBg: "bg-danger bg-opacity-10", iconColor: "text-danger" },
    { title: "โต๊ะใช้งาน", total: "3 / 12", footer: "9 โต๊ะว่าง", iconClass: "bi-people", iconBg: "bg-primary bg-opacity-10", iconColor: "text-primary" }
  ];

  const orders = [
    { table: "โต๊ะ 2", items: "ริบอายสายฟาด x2, กุ้งแม่น้ำจำแลง x1, ชาเขียวรีฟิลฉบับเจ๊ x2", total: "-", status: "รอรับ", statusColor: "warning", time: "09:54" },
    { table: "โต๊ะ 1", items: "คุโรบูตะหน้ามน x2, สามชั้นชั้นเลิศ x1, ลูกชิ้นปลาภูเก็ต x1", total: "-", status: "เตรียม", statusColor: "danger", time: "09:44" },
    { table: "โต๊ะ 3", items: "วากิวจันทร์กระจ่าง x1, ชุดจันทร์ฉาย x1, น้ำลำไยเนื้อเน้น x1", total: "-", status: "เสิร์ฟแล้ว", statusColor: "success", time: "09:14" }
  ];

  return (
    <div className="container py-4" style={{ backgroundColor: '#fdfdfd' }}>
      <div className="row g-3 mb-4">
        {stats.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <StatCard {...item} />
          </div>
        ))}
      </div>
      <div className="alert border-0 d-flex align-items-center rounded-4 mb-4 py-2" 
           style={{ backgroundColor: '#fff5f5', border: '1px solid #ffeaea' }}>
        <span className="badge rounded-pill bg-danger px-3 py-2 me-3">3 เมนู</span>
        <span className="text-dark fw-medium">หมดสต็อก - ตรวจสอบที่หน้าพนักงาน</span>
      </div>
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-4">
            <i className="bi bi-card-checklist text-danger fs-4 me-2"></i>
            <h5 className="mb-0 fw-bold">รายละเอียดออเดอร์ทั้งหมด</h5>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr className="text-secondary small">
                  <th className="border-0 pb-3">โต๊ะ</th>
                  <th className="border-0 pb-3">รายการ</th>
                  <th className="border-0 pb-3 text-center">ยอดรวม</th>
                  <th className="border-0 pb-3 text-center">สถานะ</th>
                  <th className="border-0 pb-3 text-end">เวลา</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="fw-bold py-3">{order.table}</td>
                    <td className="text-muted small">{order.items}</td>
                    <td className="text-center text-danger fw-bold">{order.total}</td>
                    <td className="text-center">
                      <span className={`badge rounded-pill bg-${order.statusColor} bg-opacity-25 text-${order.statusColor} px-3 py-2`} style={{ fontSize: '0.75rem' }}>
                        {order.status}
                      </span>
                    </td>
                    <td className="text-end text-muted small">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashborad;