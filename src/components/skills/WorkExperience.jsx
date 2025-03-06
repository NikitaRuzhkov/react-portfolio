import React from "react";
import { workExperience } from "../../data/workExperience";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";

const WorkExperience = () => {
    return (
        <div className="education work-exp">
            <motion.h3 className="work-exp-title"
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
                custom={2}
                variants={slideInVariants('top', 0.6, 50, true)}
            >Work & Experience</motion.h3>
            <div className="skills-info">
                {workExperience.map((item, index) => (
                    <motion.div
                        className="experience-card" key={index}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                        custom={index}
                        variants={slideInVariants('top', 0.4, 50, true)}
                    >
                        <div className="upper">
                            <h3>{item.title}</h3>
                            <h5>{item.employmentType}</h5>
                            <span>{item.period}</span>
                        </div>
                        <div className="hr"></div>
                        <h4 className="label">{item.company}.</h4>
                        <p>{item.descrition}</p>
                    </motion.div>
                ))}


            </div>
        </div>
    )
}

export { WorkExperience }