import React from "react"
import StatCard from "../../components/cards/StatCard"
import dashboardData from "../../data/adminDashboard.json"

import {
  ClipboardList,
  Trophy,
  AlertTriangle
} from "lucide-react"
import iconMap from "../../utils/iconMap"

const AdminDashboard = () => {

  const { stats, alerts, orders, topMenus, outOfStock } = dashboardData

  return (
    <div className="container-fluid py-4 px-4" style={{ backgroundColor: "#fdfdfd" }}>

      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        {stats.map((item, i) => {

          const IconComponent = iconMap[item.iconClass]

          return (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <StatCard
                {...item}
                icon={IconComponent}
              />
            </div>
          )
        })}
      </div>

      {/* Alerts */}
      {alerts.map((alert, i) => (
        <div
          key={i}
          className="d-flex align-items-center rounded-4 mb-4 py-2 px-3"
          style={{ backgroundColor: "#fff5f5", border: "1px solid #ffeaea" }}
        >
          <span className={`badge rounded-pill bg-${alert.type} px-3 py-2 me-3`}>
            {alert.count} {alert.label}
          </span>

          <span className="text-dark fw-medium">
            {alert.message}
          </span>
        </div>
      ))}

      <div className="row g-4 mb-4">

        {/* Orders */}
        <div className="col-12 col-xl-8">
          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex align-items-center mb-4">
                <ClipboardList size={22} className="text-danger me-2" />
                <h5 className="mb-0 fw-bold">
                  รายละเอียดออเดอร์ทั้งหมด
                </h5>

                <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill ms-2 px-3">
                  {orders.length} รายการ
                </span>
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
                    {orders.map((order, i) => (

                      <tr key={i}>

                        <td className="fw-bold py-3">
                          {order.table}
                        </td>

                        <td className="text-muted small">
                          {order.items}
                        </td>

                        <td className="text-center text-danger fw-bold">
                          {order.total} .-
                        </td>

                        <td className="text-center">

                          <span
                            className={`badge rounded-pill bg-${order.statusColor} bg-opacity-25 text-${order.statusColor} px-3 py-2`}
                            style={{ fontSize: "0.75rem" }}
                          >
                            {order.status}
                          </span>

                        </td>

                        <td className="text-end text-muted small">
                          {order.time}
                        </td>

                      </tr>

                    ))}
                  </tbody>

                </table>

              </div>

            </div>

          </div>
        </div>

        {/* Right column */}
        <div className="col-12 col-xl-4 d-flex flex-column gap-4">

          {/* Top Menu */}
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">

              <div className="d-flex align-items-center mb-3">
                <Trophy size={20} className="text-warning me-2" />
                <h6 className="mb-0 fw-bold">
                  เมนูขายดี
                </h6>
              </div>

              {topMenus.map((menu, i) => (

                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center py-2 border-bottom border-light"
                >

                  <div className="d-flex align-items-center gap-2">

                    <span
                      className="fw-bold text-muted"
                      style={{ width: 20, fontSize: "0.8rem" }}
                    >
                      {i + 1}
                    </span>

                    <div>

                      <div className="small fw-medium">
                        {menu.name}
                      </div>

                      <div
                        className="text-muted"
                        style={{ fontSize: "0.72rem" }}
                      >
                        {menu.category}
                      </div>

                    </div>

                  </div>

                  <div className="text-end">

                    <div className="small fw-bold text-danger">
                      {menu.orders} ครั้ง
                    </div>

                    <div
                      className="text-muted"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {menu.revenue.toLocaleString()} .-
                    </div>

                  </div>

                </div>

              ))}

            </div>
          </div>

          {/* Out Of Stock */}
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">

              <div className="d-flex align-items-center mb-3">
                <AlertTriangle size={20} className="text-danger me-2" />
                <h6 className="mb-0 fw-bold">
                  เมนูหมดสต็อก
                </h6>
              </div>

              {outOfStock.map((menu, i) => (

                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center py-2 border-bottom border-light"
                >

                  <div>

                    <div className="small fw-medium">
                      {menu.name}
                    </div>

                    <div
                      className="text-muted"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {menu.category}
                    </div>

                  </div>

                  <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 small">
                    หมด
                  </span>

                </div>

              ))}

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard