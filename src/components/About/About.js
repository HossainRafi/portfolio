import React from "react";
import "./About.css"
import Me from "../../assets/profile.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Here Is</h5>
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
            I am a beginner in Programming and Web Development community. Last one year was very hard time for me as a beginner. I worked hard to learn many technologies.Such as React.js, Node.js, JavaScript, HTML, CSS, MongoDB, Github, Firebase, Heroku etc. I Challenged myself to learn TypeScript, ReactNative, Redux, JQuery in next six months. After six month I want to see myself as a proper MERN Stack Web Developer. I'm trying hard and soul to achieve my goal.
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
