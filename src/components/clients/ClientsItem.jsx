import React from "react";

const ClientsItem = ({ client }) => {
    return (
        <div className="swiper-slide swiper-client-block">
            <div className="client-img">
                <img src={client.imgSrc} alt={client.name} />
            </div>
            <div className="client-details">
                <p>{client.description}</p>
                <h3>{client.name}</h3>
                <span>{client.position}</span>
            </div>
        </div>
    )
}

export { ClientsItem }