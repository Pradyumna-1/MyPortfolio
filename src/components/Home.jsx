import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Typewriter from "typewriter-effect";
import {
  BsArrowUpRight,
  BsChevronDown,
  BsTwitch,
  BsTwitterX,
} from "react-icons/bs";
import me from "../assets/logo2.jpg";
// import { SiTwitter } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
    <div id="home" data-aos="zoom-out">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Pradyumna Kumar Naik
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                '<span style="color: #FF651C;">A Full Stack Developer</span>',
                '<span style="color: #f12e2e;">A MERN Stack Developer</span>',
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:naik.kumarpradyumna@gmail.com">Hire Me</a>
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
              href="https://twitter.com/Pradyumna_19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="twitter-link"
            >
              <BsTwitterX size={32} />
            </a>
            {/* <article data-special>
              <span></span>
            </article> */}
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Pradyumna" />
      </section>
      {/* <BsChevronDown /> */}
    </div>
  );
};

export default Home;
