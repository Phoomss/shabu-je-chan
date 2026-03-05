import React, { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import restaurantMenu from '../../data/restaurantMenu.json'
import restaurantSetMenu from '../../data/restauranSetMenu.json'

// รวม + flatten ข้อมูลจาก JSON
const buildAllItems = () => {
  const menu = restaurantMenu.data
  const sets = restaurantSetMenu.data

  const categoryMap = {
    signatureSets: 'ชุดซิกเนเจอร์',
    premiumBeef:   'เนื้อพรีเมียม',
    porkSelection: 'หมูคัดสรร',
    seafood:       'อาหารทะเล',
    appetizers:    'อาหารเริ่มต้น',
    soups:         'ซุป',
    dips:          'น้ำจิ้ม',
    drinks:        'เครื่องดื่ม',
    desserts:      'ของหวาน',
  }

  const allData = { ...sets, ...menu }
  const items = []

  Object.entries(allData).forEach(([key, arr]) => {
    arr.forEach(item => {
      items.push({ ...item, category: categoryMap[key] || key })
    })
  })

  return items
}

const allItems = buildAllItems()

const categories = ['ทั้งหมด', ...Array.from(new Set(allItems.map(i => i.category)))]

const MenuManage = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด')
  const [stockState, setStockState] = useState(
    Object.fromEntries(allItems.map(i => [i.id, i.isAvailable]))
  )

  const toggleStock = (id) => {
    setStockState(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const filtered = useMemo(() => {
    return allItems.filter(item => {
      const matchCat = activeCategory === 'ทั้งหมด' || item.category === activeCategory
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  return (
    <div>
      {/* Search + Filter bar */}
      <div className="d-flex align-items-center gap-2 mb-4 flex-wrap">
        <div className="input-group" style={{ maxWidth: 260 }}>
          <span className="input-group-text bg-white border-end-0">
            <Search size={15} className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0 ps-0"
            placeholder="ค้นหาเมนู..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn rounded-3 px-3 py-2 small fw-medium ${
              activeCategory === cat ? 'btn-danger' : 'btn-outline-secondary border-1'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <table className="table table-borderless mb-0">
          <thead className="bg-light">
            <tr>
              <th className="py-3 ps-4 text-muted small fw-semibold">เมนู</th>
              <th className="py-3 text-muted small fw-semibold">หมวดหมู่</th>
              <th className="py-3 text-muted small fw-semibold">ราคา</th>
              <th className="py-3 text-muted small fw-semibold">สถานะ</th>
              <th className="py-3 pe-4 text-muted small fw-semibold text-end">In/Out Stock</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, i) => {
              const inStock = stockState[item.id]
              return (
                <tr key={item.id} className={i % 2 === 0 ? '' : 'bg-light bg-opacity-50'}>
                  <td className="py-3 ps-4 fw-medium align-middle">
                    {item.name}
                    {item.grade && <span className="text-muted small ms-1">({item.grade})</span>}
                    {!item.grade && <span className="text-muted small ms-1">()</span>}
                  </td>
                  <td className="py-3 align-middle">
                    <span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-normal small">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 align-middle text-muted">-</td>
                  <td className="py-3 align-middle">
                    <span
                      className={`badge rounded-pill px-3 py-2 fw-normal small ${
                        inStock
                          ? 'text-success bg-success bg-opacity-10'
                          : 'text-danger bg-danger bg-opacity-10'
                      }`}
                    >
                      {inStock ? 'มีของ' : 'หมด'}
                    </span>
                  </td>
                  <td className="py-3 pe-4 align-middle text-end">
                    {/* Toggle switch */}
                    <div
                      onClick={() => toggleStock(item.id)}
                      style={{
                        display: 'inline-block',
                        width: 48,
                        height: 26,
                        borderRadius: 13,
                        background: inStock ? '#dc3545' : '#ccc',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: 3,
                        left: inStock ? 25 : 3,
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: 'white',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                        transition: 'left 0.2s',
                      }} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center text-muted py-5">
            <Search size={32} className="mb-2 d-block mx-auto" />
            ไม่พบเมนูที่ค้นหา
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuManage