import React from "react";
import './Clients.css'
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { ClientsItem } from "./ClientsItem";
import { clientsData } from "../../data/clientsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaSleigh } from "react-icons/fa";





const Clients = () => {
    return (
        <section className="section our-client" id='clients'>
            <div className="container flex-center">
                <SectionTitle title='Our Clients' subTitle='Our Clients' />
                <motion.div
                    className="our-client-wrapper"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                    variants={slideInVariants('top', 0.7, 70, false)}
                >
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="client-swiper"
                    >
                        {clientsData.map(client => (
                            <SwiperSlide key={client.id}>
                                <ClientsItem client={client} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </motion.div>
            </div>
        </section>
    )
}

export { Clients }