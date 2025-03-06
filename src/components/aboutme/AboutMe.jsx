import React from "react";
import './AboutMe.css'
import { aboutImg } from "../../assets/images";
import { FaDownload } from "react-icons/fa";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { aboutMe } from "../../data/aboutme";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";



const AboutMe = () => {


    return (
        <section className="about section" id="about">
            <div className="container flex-center">
                <SectionTitle title='About me' subTitle='About me' />
                <div className="about-wrapper">
                    <motion.div className="about-img"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                        custom={0}
                        variants={slideInVariants('left', 0.9, 100, false)}
                    >
                        <img src={aboutImg} alt="about" />
                    </motion.div>
                    <div className="about-info">
                        <div className="description">
                            <motion.h3
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: false, amount: 0.5 }}
                                custom={0}
                                variants={slideInVariants('right', 0.6, 50, true)}
                            >I'm Ilay</motion.h3>
                            <motion.h4
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: false, amount: 0.5 }}
                                custom={1}
                                variants={slideInVariants('right', 0.6, 50, true)}
                            >A Lead <span>Front-End Developer</span> based in <span>California</span></motion.h4>
                            <motion.p
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: false, amount: 0.5 }}
                                custom={2}
                                variants={slideInVariants('right', 0.6, 50, true)}
                            >
                                I design and develop services for customers specializing creating stylish, modern
                                websites,
                                web services and online stores. My passion is to design digital user experiences through
                                meaningful interactions. Check out my Portfolio
                            </motion.p>
                        </div>
                        <ul className="professional-list">
                            {aboutMe.map((item, index) => (
                                <motion.li
                                    className="list-item"
                                    key={item.id}
                                    initial='hidden'
                                    custom={index}
                                    whileInView='visible'
                                    viewport={{ once: false, amount: 0.5 }}
                                    variants={slideInVariants('right', 0.6, 40, true)}
                                >
                                    <span className="number">{item.number}</span>
                                    <span className="text">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.a
                            href="" className="inner-info-link"
                            initial='hidden'
                            custom={3}
                            whileInView='visible'
                            viewport={{ once: false, amount: 0.5 }}
                            variants={slideInVariants('bottom', 0.7, 60, true)}
                        >Download
                            <FaDownload />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { AboutMe }