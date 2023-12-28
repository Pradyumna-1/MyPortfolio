// import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import data from "../assets/data.json";
// import Card from "./Card"; // Make sure to import the Card component

// const Work = () => {
//   const [visibleProjects, setVisibleProjects] = useState(3);
//   const [addMargin, setAddMargin] = useState(false);

//   const handleLoadMore = () => {
//     setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
//     setAddMargin(true); // Set the state to add margin
//   };

//   const containerStyle = {
//     marginBottom: addMargin ? "20px" : "0", // Adjust the margin value as needed
//     transition: "margin-bottom 0.3s ease-in-out", // Optional: Add a smooth transition effect
//   };

//   return (
//     <div id="work">
//       <h2>WORK</h2>
//       <section>
//         <article>
//           <div className="carousel-container" style={containerStyle}>
//             {data.projects.slice(0, visibleProjects).map((project) => (
//               <Card
//                 key={project.title}
//                 title={project.title}
//                 content={project.description}
//                 imageUrl={project.imgSrc}
//                 demoUrl={project.url}
//               />
//             ))}
//           </div>

//           {visibleProjects < data.projects.length && (
//             <button onClick={handleLoadMore}>Load More</button>
//           )}
//         </article>
//       </section>
//     </div>
//   );
// };

// // export default Work;
// import React from "react";
// import data from "../assets/data.json";

// const Work = () => {
//   return (
//     <section id="work">
//     <h2>WORK</h2>
//       <article>
//         {data.projects.map((i) => (
//           <div key={i.title} className="workItem">
//             <img src={i.imgSrc} alt={i.title} />
//             <aside>
//               <h3>{i.title}</h3>
//               <p>{i.description}</p>
//               <a target={"blank"} href={i.url}>
//                 View Demo
//               </a>
//             </aside>
//           </div>
//         ))}
//       </article>
//     </section>
//   );
// };

// export default Work;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;