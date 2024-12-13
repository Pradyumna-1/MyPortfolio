import React,{useEffect} from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaGit,
  FaLinux,
  FaPhp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiFirebase,
  SiLinux,
  SiGit,
  SiPhp,

} from "react-icons/si";
// import "../styles/SkillSection.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <div id="skills" data-aos="zoom-in">
      <section className="skill-section">
        <h2 className="section-title">MY SKILLS</h2>
        <div className="container">
          <div className="skill-list">
            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              <ul className="skills">
                <li>
                  <FaHtml5 className="skill-icon html-icon" title="HTML" />
                </li>
                <li>
                  <FaCss3Alt className="skill-icon css-icon" title="CSS" />
                </li>
                <li>
                  <SiJavascript
                    className="skill-icon javascript-icon"
                    title="JavaScript"
                  />
                </li>

                <li></li>
                <li>
                  <FaReact className="skill-icon react-icon" title="React" />
                </li>

                <li>
                  <SiTailwindcss
                    className="skill-icon tailwind-icon"
                    title="Tailwindcss"
                  />
                </li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Backend</h3>
              <ul className="skills">
                <li>
                  <FaJava className="skill-icon java-icon" title="java" />
                </li>

                <li>
                  <FaNodeJs className="skill-icon nodejs-icon" title="NodeJS" />
                </li>
                <li></li>
                <li>
                  <SiExpress
                    className="skill-icon express-icon"
                    title="ExpressJS"
                  />
                </li>
                <li>
                  <SiMongodb
                    className="skill-icon mongodb-icon"
                    title="MongoDB"
                  />
                </li>

                <li>
                  <SiPhp className="skill-icon php-icon" title="PHP" />
                </li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Others </h3>
              <ul className="skills">
                <li>
                  <FaGithub className="skill-icon github-icon" title="GitHub" />
                </li>
                <li>
                  <SiGit className="skill-icon Git-icon" title="Git" />
                </li>

                <li>
                  <FaLinux className="skill-icon linux-icon" title="Linux" />
                </li>
                <li>
                  <SiFirebase
                    className="skill-icon firebase-icon"
                    title="Firebase"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
