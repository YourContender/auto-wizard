import React from 'react'

export const ListServicesItem = () => {
    return (
        <div className="list-services__container-list-item">
            <div className="list-services-img">
                <img src={motor} alt="" />
            </div>
            
            <div className="list-services-subtitle">
                <h2>Ремонт двигуна</h2>
            </div>
            
            <div className="list-services-btn">
                <button>Детальніше</button>
            </div>
        </div>
    )
}
