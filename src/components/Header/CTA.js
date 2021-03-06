import React from "react";
import Resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
       Get Resume
      </a>
      <a href="#contact" className="btn">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
