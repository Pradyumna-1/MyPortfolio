// import React, { useEffect } from "react";
// import myImage from "../assets/about.jpg";
// // import Resume from "../assets/Resume.pdf";
// import Resume from "../assets/Resume.pdf";


// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 120,
//       duration: 600,
//       easing: "ease-in-out",
//       once: false,
//     });
//     AOS.refresh();
//   }, []);

//   const resume = "https://www.linkedin.com/in/pradyumnakumarnaik/overlay/1759397109055/single-media-viewer/?profileId=ACoAADuT730BJuy0aTw4X7am5gcQqLQGo7jmQIY";
//   return (
//     // <div id="about" data-aos="fade-up">
//     //   <h2>About Me</h2>
//     //   <div className="about__me">
//     //     <img
//     //       src={myImage}
//     //       alt="Pradyumna Kumar Naik"
//     //       data-aos="fade-up-right"
//     //     />
//     //     <p data-aos="fade-left">
//     //       Hi, I'm Pradyumna, currently working as a Software Engineer at
//     //       Signavox Technologies. As a Full Stack Developer, I've gained hands-on
//     //       experience building both the frontend and backend of web applications.
//     //       I enjoy creating smooth, user-friendly interfaces while also working
//     //       on the backend to ensure everything runs efficiently. My focus is on
//     //       writing clean, maintainable code and delivering high-quality software.
//     //       I'm passionate about solving problems, collaborating with talented
//     //       teams, and contributing to projects that make a real impact. I'm
//     //       driven to apply my skills in development and quality assurance to
//     //       build meaningful, reliable solutions.
//     //       {/* Hi,  I’m Pradyumna, a Software Engineer at Signavox Technologies. As a
//     //       Full Stack Developer, I have hands-on experience building both
//     //       frontend and backend components of web applications. I enjoy creating
//     //       smooth, user-friendly interfaces while working on the backend to
//     //       ensure systems are efficient and reliable. I focus on writing clean,
//     //       maintainable code and delivering high-quality software. I am
//     //       passionate about problem-solving, collaborating with skilled teams,
//     //       and contributing to projects that create real impact. I am motivated
//     //       to apply my development and quality assurance skills to build
//     //       meaningful and reliable solutions. */}
//     //     </p>
//     //     <a href={resume} target="_blank" download className="btn" data-aos="fade-up">
//     //       Download CV
//     //     </a>

//     //     {/* Experience  */}


//     //     <div className="experience">
//     //       <h3>Experience</h3>
//     //     </div>
//     //   </div>
//     // </div>

//     <div id="about" data-aos="fade-up">
//   <h2>About Me</h2>

//   {/* TOP TWO COLUMN ABOUT */}
//   {/* <div className="about__container">

//     <div className="about__left">
//       <img src={myImage} alt="Pradyumna Kumar Naik" />
//     </div>

//     <div className="about__right">
//       <p>
//         Hi, I'm Pradyumna, currently working as a Software Engineer at
//         Signavox Technologies. As a Full Stack Developer, I've gained
//         hands-on experience building both the frontend and backend of web
//         applications. I enjoy creating smooth, user-friendly interfaces
//         while also working on the backend to ensure everything runs
//         efficiently. My focus is on writing clean, maintainable code and
//         delivering high-quality software. I'm passionate about solving
//         problems, collaborating with talented teams, and contributing to
//         projects that make a real impact.
//       </p>

//       <a
//         href={resume}
//         target="_blank"
//         rel="noreferrer"
//         className="btn"
//       >
//         Download CV
//       </a>
//     </div>

//   </div> */}

// <div className="about__container">

//   {/* TEXT FIRST */}
//   <div className="about__right">
//     <p>
//       Hi, I'm Pradyumna, currently working as a Software Engineer at
//       Signavox Technologies. As a Full Stack Developer, I've gained
//       hands-on experience building both the frontend and backend of web
//       applications. I enjoy creating smooth, user-friendly interfaces
//       while also working on the backend to ensure everything runs
//       efficiently. My focus is on writing clean, maintainable code and
//       delivering high-quality software.
//     </p>

//     <a
//       href={resume}
//       target="_blank"
//       rel="noreferrer"
//       className="btn"
//     >
//       Download CV
//     </a>
//   </div>

//   {/* IMAGE SECOND */}
//   <div className="about__left">
//     <img src={myImage} alt="Pradyumna Kumar Naik" />
//   </div>

// </div>

//   {/* EXPERIENCE FULL WIDTH BELOW */}
//   <div className="experience-section">

//     <h3 className="experience-title">Experience</h3>

//     <div className="timeline">

//       <div className="timeline-item">
//         <span className="time">2023 Jan–Apr</span>
//         <div className="dot"></div>
//         <div className="content">
//           <h4>Python / Django Developer</h4>
//           <p className="company">Thinkpen Media Pvt Ltd</p>
//           <p>
//             Developed web applications using Django and SQLite.
//             Delivered 5+ production-grade projects.
//           </p>
//         </div>
//       </div>

//       <div className="timeline-item">
//         <span className="time">2023 Aug–Oct</span>
//         <div className="dot"></div>
//         <div className="content">
//           <h4>Web Developer</h4>
//           <p className="company">Musui India Pvt Ltd</p>
//           <p>
//             Built interfaces using HTML, CSS, JavaScript and React.
//             Worked closely with team members.
//           </p>
//         </div>
//       </div>

//       <div className="timeline-item">
//         <span className="time">2023 Apr–Aug</span>
//         <div className="dot"></div>
//         <div className="content">
//           <h4>Software Developer Intern</h4>
//           <p className="company">Commata Intellect LLP</p>
//           <p>
//             Frontend with React + Tailwind and REST APIs using DRF.
//             Ensured seamless frontend-backend integration.
//           </p>
//         </div>
//       </div>

//     </div>
//   </div>

// </div>

//   );
// };

// export default About;


import React, { useEffect } from "react";
import myImage from "../assets/about.jpg";


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

  const resume = "https://www.linkedin.com/in/pradyumnakumarnaik/overlay/1759397109055/single-media-viewer/?profileId=ACoAADuT730BJuy0aTw4X7am5gcQqLQGo7jmQIY";

  return (
    <div id="about" data-aos="fade-up">
      <h2>About Me</h2>

      <div className="about__container">
        {/* TEXT FIRST */}
        <div className="about__right">
          <p>
            Hi, I'm Pradyumna, currently working as a Software Engineer at
            Signavox Technologies. As a Full Stack Developer, I've gained
            hands-on experience building both the frontend and backend of web
            applications. I enjoy creating smooth, user-friendly interfaces
            while also working on the backend to ensure everything runs
            efficiently. My focus is on writing clean, maintainable code and
            delivering high-quality software.
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Download CV
          </a>
        </div>

        {/* IMAGE SECOND */}
        <div className="about__left">
          <img src={myImage} alt="Pradyumna Kumar Naik" />
        </div>
      </div>

      {/* EXPERIENCE FULL WIDTH BELOW */}
      <div className="experience-section">
        <h3 className="experience-title">Experience</h3>

        <div className="timeline">
          <div className="timeline-item">
            <span className="time">2025<br />Oct-Present</span>
            <div className="dot"></div>
            <div className="content">
              <h4>Software Engineer</h4>
              <p className="company">Signavox Technologies</p>
              <p>
                Working as a Full-Stack Software Engineer building scalable web
                applications and internal platforms. Focused on writing clean,
                maintainable code, optimizing performance, and collaborating with
                cross-functional teams to deliver production-ready solutions.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="time">2025<br />Feb-June</span>
            <div className="dot"></div>
            <div className="content">
              <h4>Full Stack Developer</h4>
              <p className="company">Gollamudi Technology and Software</p>
              <p>
                Contributed to frontend and backend development using React, Tailwind CSS, firebase and Node.js.
                Built reusable UI components, integrated REST APIs, and improved
                application stability and user experience.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="time">2024<br />Feb-May</span>
            <div className="dot"></div>
            <div className="content">
              <h4>Web Developer</h4>
              <p className="company">Bharat Intern</p>
              <p>
                Worked as a Web developer using tech stack HTML,CSS, JS, and
                React.jS.learned how to work colaboratively with team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;