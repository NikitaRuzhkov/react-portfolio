import React from "react";
import './Services.css'
import { ServicesItem } from "./ServicesItem";
import { services } from "../../data/services";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";


const Services = () => {
    return (
        <section className="services section" id="services">
            <div className="container flex-center">
                <SectionTitle title='Services' subTitle='Services' />
                <div className="services-wrapper">
                    <motion.h3
                        className="services-description"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                        custom={1}
                        variants={slideInVariants('top', 0.4, 50, true)}

                    >What I provide</motion.h3>
                    <ul className="services-list">
                        <ServicesItem services={services} />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export { Services }