import { Utensils } from "lucide-react"

function HeroSection() {
    return (
        <section
            id="home"
            className="d-flex align-items-center text-white"
            style={{
                width: "100%",
                minHeight: "100vh",
                backgroundImage:
                    "url('https://v0-shabu-restaurant-website.vercel.app/hero-shabu.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
        >
            {/* Overlay ดำ */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.6)",
                }}
            ></div>

            {/* Content */}
            <div className="container position-relative ps-lg-5">
                <p className="text-warning fw-bold">🍲 SINCE 2015</p>

                <h1 className="display-3 fw-bold">
                    ชาบูจันทร์
                </h1>

                <h4 className="mb-4 text-light">
                    Shabu Je Chan
                </h4>

                <p className="mb-4 col-lg-6">
                    ชาบูหม้อไฟสูตรเด็ด วัตถุดิบสดใหม่ทุกวัน
                    น้ำซุปเข้มข้น รสชาติถูกปากคนไทย ในราคาที่คุ้มค่า
                </p>

            </div>
        </section>
    )
}

export default HeroSection