import React from "react";
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          href="https://web.facebook.com/rafi.barishal/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
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
      <div className="copyright">
        <small>All rights reserved by &copy; Rafi</small>
      </div>
    </footer>
  );
};

export default Footer;
