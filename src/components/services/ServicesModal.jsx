import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


const ServicesModal = ({ item, isActive, closeModal }) => {

    useEffect(() => {

        const handleKeyDown = event => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }
        if (isActive) {
            document.addEventListener('keydown', handleKeyDown)
        }
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isActive, closeModal])



    return (
        <>
            <div className={`service-modal ${isActive ? 'active' : ''}`} onClick={closeModal} >
                <div className="service-modal-body" onClick={e => e.stopPropagation()}>
                    <FaXmark className="modal-close-btn" onClick={closeModal} />
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.descrition}</p>
                    <ul>
                        {item.list.map((item, index) => (
                            <li key={index}>
                                <FaCheckCircle />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}

export { ServicesModal }