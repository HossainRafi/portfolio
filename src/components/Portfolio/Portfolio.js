import React from "react";
import "./Portfolio.css"
import Crafty from "../../assets/crafty-1.png";
import Warehouse from "../../assets/warehouse-1.png";
import Capture from "../../assets/capture-1.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Take A Look Into</h5>
      <h2>My Recent Projects</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Crafty} alt="" />
          </div>
          <div className="portfolio-content">
            <h3>Crafty</h3>
            <a
              href="https://github.com/HossainRafi"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Github
            </a>
            <a
              href="https://crafty-55e7d.web.app/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Warehouse} alt="" />
          </div>
          <div className="portfolio-content">
            <h3>Cellhouse</h3>
            <a
              href="https://github.com/HossainRafi"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Github
            </a>
            <a
              href="https://warehouse-8c8c8.web.app"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Capture} alt="" />
          </div>
          <div className="portfolio-content">
            <h3>Capture Freaks</h3>
            <a
              href="https://github.com/HossainRafi"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Github
            </a>
            <a
              href="https://assignment-10-8d187.web.app"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
