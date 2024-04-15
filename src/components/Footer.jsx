// import React from "react";
// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillYoutube,
//   AiOutlineArrowUp,
// } from "react-icons/ai";

// const Footer = () => {
//   return (
//     <footer>
//       <div>
//         <img
//           src={"https://avatars.githubusercontent.com/u/92319505?v=4"}
//           alt="Founder"
//         />

//         <h2>Pradyumna Kumar Naik</h2>
//         <p>Motivation is temporary, but discipline last forever.</p>
//       </div>

//       <aside>
//         <h2>Social Media</h2>

//         <article>
//           <a href="https://youtube.com/6packprogrammer" target={"blank"}>
//             <AiFillYoutube />
//           </a>
//           <a href="https://www.instagram.com/im_siddharth_20/" target={"blank"}>
//             <AiFillInstagram />
//           </a>
//           <a href="https://github.com/Pradyumna-1" target={"blank"}>
//             <AiFillGithub />
//           </a>
//         </article>
//       </aside>
//       <a href="#home">
//         <AiOutlineArrowUp />
//       </a>
//     </footer>
//   );
// };

// export default Footer;

// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h2>Pradyumna Kumar Naik</h2>
          {/* Insert the current year dynamically */}
          <p>&copy; {currentYear}. All rights reserved.</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100035573633791"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/im_siddharth_20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/* Add more social media icons and links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
