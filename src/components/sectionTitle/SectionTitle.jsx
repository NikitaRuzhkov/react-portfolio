import React from "react";
import './SectionTitle.css'
import { motion } from "motion/react";
import { titleVariants, subtitleVariants } from "../../utils/animation";



const SectionTitle = ({ title, subTitle }) => {
    return (
        <>
            <motion.h2
                className="inner-title"
                initial='hidden'
                whileInView='visible'
                variants={titleVariants}
                viewport={{ once: false, amount: 0.5 }}
            >{title}</motion.h2>
            <motion.h3
                className="inner-second-title"
                initial='hidden'
                whileInView='visible'
                variants={subtitleVariants}
                viewport={{ once: false, amount: 0.5 }}
            >{subTitle}</motion.h3>
        </>
    )
}

export { SectionTitle }