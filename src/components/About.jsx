
import React from "react";
import myImage from "../assets/about.jpg";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <div id="about">
      <h2>ABOUT ME</h2>
      <div className="about__me">
        <img src={myImage} alt="Pradyumna Kumar Naik" />
        <p>
          Hello! I'm Pradyumna Kumar Naik, A Frontend Developer and QA Tester
          skilled in Selenium and PHP, holding a recent Computer Science and
          Engineering degree from GCEK, Bhawanipatna. Proven ability to create
          captivating user interfaces and ensure robust software quality. A
          fresh graduate with a passion for innovation, seeking a challenging
          role to apply technical acumen, contribute to cutting-edge projects,
          and drive excellence in a collaborative work setting. Eager to bring a
          blend of creativity and testing expertise to a dynamic team. Open to
          exciting opportunities in frontend development and quality assurance.
        </p>
        <a href={Resume} download className="btn ">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;

