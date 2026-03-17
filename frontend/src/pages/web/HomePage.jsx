import React from 'react'

import ContactSection from '../../components/web/ContactSestion'
import PricingSection from '../../components/web/PicingSesction'
import HeroSection from '../../components/web/HeroSection'
import restaurantHotDelas from '../../data/restaurantHotDeals.json'
import Promotion from '../../components/web/Promotion'

const HomePage = () => {
  const { hotDeals } = restaurantHotDelas.data

  return (
    <div>
      <HeroSection />
      <PricingSection />

      <div className="container py-5" style={{ maxWidth: '1100px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">โปรโมชั่น</h2>
          <p className="text-muted mt-2">ดีลลับฉบับตัวแม่ ข้อเสนอพิเศษที่ไม่ควรพลาด</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {hotDeals.map(deal => (
            <div className="col" key={deal.id}>
              <Promotion
                name={deal.name}
                description={deal.description}
                condition={deal.condition}
                image={deal.image}
                discountPercent={deal.discountPercent}
                isAvailable={deal.isAvailable}
              />
            </div>
          ))}
        </div>
      </div>

      <ContactSection />
    </div>
  )
}

export default HomePage