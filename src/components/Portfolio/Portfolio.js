import React from "react";
import Crafty from "../../assets/crafty-1.png";
import Warehouse from "../../assets/warehouse-1.png";
import Capture from "../../assets/capture-1.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Want To Know</h5>
      <h2>My Recent Projects</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Crafty} alt="" />
          </div>
          <h3>Crafty (A Tools Manufacturing Website)</h3>
          <a href="https://github.com/HossainRafi" className="btn">
            Github
          </a>
          <a href="https://crafty-55e7d.web.app/" className="btn">
            Live Demo
          </a>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Crafty} alt="" />
          </div>
          <h3>Cellphone Warehouse (A Mobile Warehouse Website)</h3>
          <a href="https://github.com/HossainRafi" className="btn">
            Github
          </a>
          <a href="https://crafty-55e7d.web.app" className="btn">
            Live Demo
          </a>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Capture} alt="" />
          </div>
          <h3>Capture Freaks (A Photographer Website)</h3>
          <a href="https://github.com/HossainRafi" className="btn">
            Github
          </a>
          <a href="https://assignment-10-8d187.web.app" className="btn">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
