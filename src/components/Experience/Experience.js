import React from "react";
import "./Experience.css"
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Get To Know</h5>
      <h2>My Skills</h2>
      <div className="container experience-container">
        <div className="frontend">
          <h3>Frontend Technologies</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend">
          <h3>Backend Technologies</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>REST API</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="others">
          <h3>Others Technologies</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Axios</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>AOS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Stripe</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Rechart</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Sendgrid</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="tools">
          <h3>Development Tools</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>VS Code</h4>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Chrome</h4>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Heroku</h4>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Netlify</h4>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Github</h4>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
