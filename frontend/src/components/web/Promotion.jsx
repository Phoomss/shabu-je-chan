import React, { useEffect, useState } from 'react'
import restaurantHotDeals from "../../data/restaurantHotDeals.json";

const Promotion = () => {
    const [hotDeal, setHotDeal] = useState([])

    useEffect(() => {
        setHotDeal(restaurantHotDeals.data.hotDeals)
    }, [])

    return (
        <div>
            Promotion

            {hotDeal.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Promotion