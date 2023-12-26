import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown, BsLink } from "react-icons/bs";
// import me from "../assets/logo.png";

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
            <a
              href="https://github.com/Pradyumna-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://www.linkedin.com/in/pradyumnakumarnaik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              // style={{  color: '#0077B5' }}
              className="linkedin-link"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/im_siddharth_20/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="instagram-link"
            >
              <FaInstagram size={32} />
            </a>
            {/* <article data-special>
              <span></span>
            </article> */}
          </aside>
        </div>
      </section>
      <section>
        {/* <img src={me} alt="Pradyumna" />   */}
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
