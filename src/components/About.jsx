// import React from "react";

// import about from '../assets/about.jpg'
// const About = () => {
//   return (
//     <div id="about">
//       <h2>About</h2>
//       <section>
//       <img src={about} alt="about-image" />
//       </section>
//     </div>
//   );
// };

// export default About;
import React from "react";
import myImage from "../assets/about.jpg";

const About = () => {
    return (
        <div id="about">
      <h2>About Me</h2>
      <div className="about__me">
        <p>
          Hello! I'm Pradyumna Kumar Naik, Dynamic Frontend Developer and QA
          Tester skilled in Selenium and PHP, holding a recent Computer Science
          and Engineering degree from GCEK, Bhawanipatna. Proven ability to
          create captivating user interfaces and ensure robust software quality.
          A fresh graduate with a passion for innovation, seeking a challenging
          role to apply technical acumen, contribute to cutting-edge projects,
          and drive excellence in a collaborative work setting. Eager to bring a
          blend of creativity and testing expertise to a dynamic team. Open to
          exciting opportunities in frontend development and quality assurance.
        </p>
        <img src={myImage} alt="Pradyumna Kumar Naik" />
      </div>
      <a href="#contact" className="btn btn-primary">
        Let's Talk about
      </a>
    </div>
  );
};

export default About;
