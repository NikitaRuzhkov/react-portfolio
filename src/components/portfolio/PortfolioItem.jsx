import React, { useState } from "react";
import { PortfolioModal } from "./PortfolioModal";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";


const PortfolioItem = ({ item, index }) => {

    const [isModalOpen, setisModalOpen] = useState(false)


    const openModal = () => {
        setisModalOpen(true)
    }

    const closeModal = () => {
        setisModalOpen(false)
    }

    return (
        <motion.div
            className="portfolio-img-card"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
            variants={slideInVariants('top', 0.4, 50, true)}
        >
            <div className="img-card" onClick={openModal}>
                <div className="overlay"></div>
                <div className="info">
                    <h3>{item.title}</h3>
                    <span>{item.category}</span>
                </div>
                <img src={item.imgSrc} alt={item.title} />
            </div>
            {isModalOpen && <PortfolioModal isModalOpen={isModalOpen} item={item} closeModal={closeModal} />}

        </motion.div>
    )
}

export { PortfolioItem }