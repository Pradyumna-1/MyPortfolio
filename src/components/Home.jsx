// import React from 'react'
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import { BsArrowUpRight } from "react-icons/bs";

// const Home = () => {
//   const animations = {
//     h1: {
//       initial: {
//         x: "-100%",
//         opacity: 0,
//       },
//       whileInView: {
//         x: 0,
//         opacity: 1,
//       },
//     },
//     button: {
//       initial: {
//         y: "-100%",
//         opacity: 0,
//       },
//       whileInView: {
//         y: 0,
//         opacity: 1,
//       },
//     },
//   };
//   return (
//     <div id="home">
//       <section>
//         <div>
//           <motion.h1 {...animations.h1}>
//             Hi,I am <br /> Pradyumna Kumar Naik
//           </motion.h1>

//           <Typewriter
//             options={{
//               strings: ["A Developer", "A QA Tester"],
//               autoStart: true,
//               loop: true,
//               wrapperClassName: "typewriterpara",
//             }}
//           />
//           <div>
//             <a href="mailto:naik.kumarpradyumna@gmail.com">Hire Me </a>
//             <a href="#work">
//               Projects <BsArrowUpRight />
//             </a>
//           </div>

//           <article>
//             <p>
//               +<span>100</span>
//             </p>
//             <span>Client World Wide</span>
//           </article>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home
import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Pradyumna Kumar Naik
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A QA Tester"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.6packprogrammer@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <aside>
            <article data-special>
              <p>About </p>
              
              <span>official.6packprogrammer@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Abhishek" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
