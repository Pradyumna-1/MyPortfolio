import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Pradyumna</h2>
    <div>
        <a href="home" id="#home">Home</a>
        <a href="about" id="#about">About</a>
        <a href="skills" id="#skills">Skills</a>
        <a href="projects" id="#projects">Experiences</a>
        <a href="contact" id="#contact">Contact</a>
    </div>
    <a href="mailto:naik.kumarpradyumna@gmail.com">
        <button>Email</button>
    </a>

  </>
)

export default Header;
