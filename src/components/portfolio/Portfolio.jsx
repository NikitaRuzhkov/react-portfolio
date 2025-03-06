import React from "react";
import './Portfolio.css'
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { PortfolioItem } from "./PortfolioItem";
import { portfolioData } from "../../data/portfolioData";


const Portfolio = () => {

    return (
        <section className="portfolio section" id="portfolio">
            <div className="container flex-center">
                <SectionTitle title='Portfolio' subTitle='Portfolio' />
                <div className="portfolio-wrapper">
                    {portfolioData.map((item, index) => (
                        <PortfolioItem item={item} key={item.id} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Portfolio }