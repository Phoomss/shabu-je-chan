import { Utensils } from "lucide-react"

function HeroSection() {
    return (
        <section
            className="d-flex align-items-center text-white"
            style={{
                width: "100%",
                minHeight: "100vh",
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1553621042-f6e147245754')",
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

                <div className="d-flex gap-3 rounded-4">
                    <button className="btn btn-danger btn-lg px-4 rounded-pill d-flex align-items-center gap-2">
                        <Utensils size={18} />
                        สั่งอาหาร
                    </button>
                    <button className="btn btn-outline-light btn-lg px-4 rounded-pill rounded-4">
                        ดูเมนู
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection