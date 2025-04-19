
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : " "}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};
// ... (other imports)

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>
      <a href="#home">{"<Sid/>"}</a>
    </h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about">
        About
      </a>
      <a onClick={() => setMenuOpen(false)} href="#skills">
        Skills
      </a>
      <a onClick={() => setMenuOpen(false)} href="#projects">
        Projects
      </a>

      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:naik.kumarpradyumna@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
