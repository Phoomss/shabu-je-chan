function Card({ image, name, description, isAvailable }) {
    return (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative h-100">
            <img
                src={image}
                className="card-img-top"
                alt={name}
                style={{ height: '220px', objectFit: 'cover' }}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1553621042-f6e147245754' }}
            />
            {!isAvailable && (
                <span className="badge bg-secondary position-absolute top-0 end-0 m-2">หมด</span>
            )}
            <div className="card-body p-3">
                <h6 className="fw-bold mb-1">{name}</h6>
                <p className="text-muted small mb-0">{description}</p>
            </div>
        </div>
    )
}

export default Card