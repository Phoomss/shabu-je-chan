import React from 'react'
import { MapPin, Clock, Phone, Mail, Facebook } from 'lucide-react'

const contactItems = [
    {
        icon: <MapPin size={18} className="text-danger mt-1 flex-shrink-0" />,
        label: 'ที่อยู่',
        value: '123/45 ถนนสุขุมวิท ซอย 55 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110',
    },
    {
        icon: <Clock size={18} className="text-danger mt-1 flex-shrink-0" />,
        label: 'เวลาเปิด-ปิด',
        value: 'ทุกวัน 11:00 - 22:00 น.\n(ครัวปิด 21:30 น.)',
    },
    {
        icon: <Phone size={18} className="text-danger mt-1 flex-shrink-0" />,
        label: 'โทรศัพท์',
        value: '02-123-4567 / 089-xxx-xxxx',
    },
    {
        icon: <Mail size={18} className="text-danger mt-1 flex-shrink-0" />,
        label: 'อีเมล',
        value: 'contact@shabujechan.com',
    },
    {
        icon: <Facebook size={18} className="text-danger mt-1 flex-shrink-0" />,
        label: 'Facebook',
        value: 'facebook.com/shabujechan',
        link: 'https://www.facebook.com/shabujechan',
    },
]

function ContactSection() {
    return (
        <section className="py-5">
            <div className="container" style={{ maxWidth: 1100 }}>
                <div className="row g-5">

                    {/* Left — เกี่ยวกับร้าน */}
                    <div className="col-12 col-lg-6">
                        <h2 className="fw-bold mb-4 text-dark">เกี่ยวกับร้าน</h2>

                        <div className="mb-4 rounded-4 overflow-hidden" style={{ height: 240 }}>
                            <img
                                src="https://v0-shabu-restaurant-website.vercel.app/restaurant-interior.jpg"
                                alt="บรรยากาศร้านชาบูเจ๊จันทร์"
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <p className="text-muted mb-4 lh-base">
                            ร้านชาบูเจ๊จันทร์ เปิดให้บริการมาตั้งแต่ปี 2558 ด้วยความตั้งใจที่จะให้บริการชาบู
                            หม้อไฟคุณภาพดี ราคาเข้าถึงได้ในบรรยากาศอบอุ่น เราคัดสรรวัตถุดิบสดใหม่ทุก
                            วัน น้ำซุปต้มสูตรเด็ดจากเจ๊จันทร์เอง ไม่ว่าจะมาคนเดียวหรือมาเป็นกลุ่ม รับรอง
                            อิ่มอร่อยทุกคน
                        </p>

                        <div className="row g-3">
                            {[
                                { value: '10+', label: 'ปีประสบการณ์' },
                                { value: '20+', label: 'เมนูให้เลือก' },
                                { value: '12', label: 'โต๊ะนั่งรับรอง' },
                            ].map((stat, i) => (
                                <div className="col-4" key={i}>
                                    <div className="text-center p-3 bg-light rounded-3">
                                        <div className="fs-4 fw-bold text-danger">{stat.value}</div>
                                        <div className="small text-muted">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — ที่ตั้ง & ติดต่อ */}
                    <div className="col-12 col-lg-6">
                        <h2 className="fw-bold mb-4 text-dark">ที่ตั้ง & ติดต่อ</h2>

                        <div className="mb-4 rounded-4 overflow-hidden shadow-sm">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9285974608865!2d100.55329527533735!3d13.71976299031227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fa021a32cf9%3A0xb4f34022a22275c5!2sSiam%20Paragon!5e0!3m2!1sth!2sth!4v1718429220991!5m2!1sth!2sth"
                                width="100%"
                                height="220"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="d-flex flex-column gap-2">
                            {contactItems.map((item, i) => (
                                <div key={i} className="p-3 bg-light rounded-3 d-flex align-items-start gap-3">
                                    {item.icon}
                                    <div>
                                        <div className="fw-bold small mb-1">{item.label}</div>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer"
                                                className="text-decoration-none text-muted small">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div className="text-muted small" style={{ whiteSpace: 'pre-line' }}>
                                                {item.value}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection