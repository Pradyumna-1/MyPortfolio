import React, { useEffect } from "react";
import myImage from "../assets/about.jpg";
// import Resume from "../assets/Resume.pdf";
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

  const resume="https://www.linkedin.com/in/pradyumnakumarnaik/overlay/1759397109055/single-media-viewer/?profileId=ACoAADuT730BJuy0aTw4X7am5gcQqLQGo7jmQIY";
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
          Hi, I'm Pradyumna, currently working as a Software Engineer at
          Signavox Technologies. As a Full Stack Developer, I've gained hands-on
          experience building both the frontend and backend of web applications.
          I enjoy creating smooth, user-friendly interfaces while also working
          on the backend to ensure everything runs efficiently. My focus is on
          writing clean, maintainable code and delivering high-quality software.
          I'm passionate about solving problems, collaborating with talented
          teams, and contributing to projects that make a real impact. I'm
          driven to apply my skills in development and quality assurance to
          build meaningful, reliable solutions.
          {/* Hi,  I’m Pradyumna, a Software Engineer at Signavox Technologies. As a
          Full Stack Developer, I have hands-on experience building both
          frontend and backend components of web applications. I enjoy creating
          smooth, user-friendly interfaces while working on the backend to
          ensure systems are efficient and reliable. I focus on writing clean,
          maintainable code and delivering high-quality software. I am
          passionate about problem-solving, collaborating with skilled teams,
          and contributing to projects that create real impact. I am motivated
          to apply my development and quality assurance skills to build
          meaningful and reliable solutions. */}
        </p>
        <a href={resume} target="_blank" download className="btn" data-aos="fade-up">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
