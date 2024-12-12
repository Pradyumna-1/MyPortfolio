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
      once: true,
    });
  }, []);

  return (
    <div id="about" data-aos="fade-up">
      <h2>ABOUT ME</h2>
      <div className="about__me">
        <img
          src={myImage}
          alt="Pradyumna Kumar Naik"
          data-aos="fade-up-right"
        />
        <p data-aos="fade-left">
          Hello I'm Pradyumna, a B.Tech graduate in Computer Science and
          Engineering at GCEK, Bhawanipatna, with hands-on experience in
          Frontend Development. Currently, I'm enhancing my skills through a
          Java Full Stack development course at JSpider, Hyderabad. I focus on
          creating engaging user interfaces and ensuring top-notch software
          quality. I'm looking for a challenging role where I can apply my
          technical knowledge and passion for innovation to contribute to
          exciting projects and work collaboratively with a dynamic team. I'm
          especially interested in opportunities in frontend development and
          quality assurance.
        </p>
        <a href={Resume} download className="btn ">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
