import React, { useEffect } from "react";
import myImage from "../assets/about.jpg";
import Resume from "../assets/Resume.pdf";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about__me">
        <img
          src={myImage}
          alt="Pradyumna Kumar Naik"
          data-aos="fade-up-right"
        />
        <p data-aos="fade-left">
          Hi, I'm Pradyumna, a B.Tech graduate in Computer Science and
          Engineering from GCEK, Bhawanipatna. As a Full Stack Developer, I've
          gained hands-on experience building both the frontend and backend of
          web applications. I enjoy creating smooth, user-friendly interfaces
          while also working on the backend to ensure everything runs
          efficiently. My focus is on writing clean, maintainable code and
          making sure the software is of the highest quality. I'm passionate
          about solving problems, collaborating with talented teams, and
          contributing to projects that make a real impact. I'm looking for
          opportunities where I can bring my skills in development and quality
          assurance to the table.
        </p>
        <a href={Resume} download className="btn" data-aos="fade-up">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
