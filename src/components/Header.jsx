// import React from "react";

// const Header = () => {
//   return (
//     <nav>
//       <NavContent />
//     </nav>
//   );
// };

// const NavContent = () => (
//   <>
//     <h2>Pradyumna.</h2>
//     <div>
//       <a href="home" id="#home">
//         Home
//       </a>
//       <a href="about" id="#about">
//         About
//       </a>
//       <a href="skills" id="#skills">
//         Skills
//       </a>
//       <a href="work" id="#work">
//        Works
//       </a>
//       <a href="contact" id="#contact">
//         Contact
//       </a>
//     </div>
//     <a href="mailto:naik.kumarpradyumna@gmail.com">
//       <button>Email</button>
//     </a>
//   </>
// );

// export default Header;
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

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Pradyumna.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:official.6packprogrammer@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
