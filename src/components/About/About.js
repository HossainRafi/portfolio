import React from "react";
import "./About.css"
import Me from "../../assets/profile.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            <article className="about-card">
              <FaUsers className="about-icon" />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>
            <article className="about-card">
              <FaFolderOpen className="about-icon" />
              <h5>Projects</h5>
              <small>15+ Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            voluptate quae accusamus incidunt ducimus quibusdam dicta aliquid
            eaque. Exercitationem corporis quas omnis laudantium dolorem,
            possimus quidem assumenda necessitatibus qui quia?
          </p>
          <a href="#contact" className="btn">
            {" "}
            Contact Me{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
