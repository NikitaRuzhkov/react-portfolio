import React, { useState } from "react";
import { ImArrowUpRight } from "react-icons/im";
import { ServicesModal } from "./ServicesModal";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";


const ServicesItem = ({ services }) => {
    const [activeIndex, setActiveIndex] = useState(false)

    const openModal = index => {
        setActiveIndex(index)
    }
    const closeModal = () => {
        setActiveIndex(false)
    }
    return (
        <>
            {services.map((item, index) => (
                <motion.li
                    className="services-container" key={index}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                    custom={index}
                    variants={slideInVariants('top', 0.4, 50, true)}
                >
                    <div
                        className="service-card"
                        onClick={() => openModal(index)}
                    >
                        <item.icon className='services-icon' />
                        <h3>{item.title}</h3>
                        <div className="learn-more-btn" >
                            Learn More
                            <ImArrowUpRight className="learn-more-icon" />
                        </div>
                    </div>
                    <ServicesModal
                        item={item}
                        isActive={activeIndex === index}
                        closeModal={closeModal}
                    />
                </motion.li>
            ))}

        </>
    )
}

export { ServicesItem }