import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

const PortfolioModal = ({ isModalOpen, item, closeModal }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }
        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => document.removeEventListener('keydown', handleKeyDown)

    }, [isModalOpen, closeModal])

    return (
        <div className={`portfolio-model ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
            <div className="portfolio-model-body" onClick={e => e.stopPropagation()}>
                <FaXmark className="portfolio-close-btn" onClick={closeModal} />
                <h3>{item.title}</h3>
                <img src={item.imgSrc} alt="" />
                <p>{item.description}.</p>
            </div>
        </div>
    )
}

export { PortfolioModal }