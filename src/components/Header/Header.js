import React from "react";
import "./Header.css";
import Typical from "react-typical";
import CTA from "./CTA";
import { FaFacebookSquare } from "react-icons/fa";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <header id="home">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile">
              <div className="profile-details-name">
                <h1 className="primary-text">Hello!</h1>
                <h1 className="highlighted-text"> I Am Hossain Rafi</h1>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  <h2 className="primary-text-typed">
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Front-end Developer🎓",
                        1000,
                        "MERN Stack Developer☯️",
                        1000,
                        "Full Stack Developer☣️",
                        1000,
                        "React.js Developer⚛️",
                        1000,
                        "JavaScript Developer😎",
                        1000,
                      ]}
                    />
                  </h2>
                </span>
              </div>
            </div>
            <div className="social">
              <div className="social-icon">
                <a
                  href="https://web.facebook.com/rafi.barishal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/in/-rafi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://github.com/HossainRafi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
            <div>
              {" "}
              <CTA />{" "}
            </div>
          </div>
          <div className="profile-img">
            <div className="profile-img-bg"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
