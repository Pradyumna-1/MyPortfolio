import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import Card from "./Card"; // Make sure to import the Card component

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [addMargin, setAddMargin] = useState(false);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
    setAddMargin(true); // Set the state to add margin
  };

  const containerStyle = {
    marginBottom: addMargin ? "20px" : "0", // Adjust the margin value as needed
    transition: "margin-bottom 0.3s ease-in-out", // Optional: Add a smooth transition effect
  };

  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <div className="carousel-container" style={containerStyle}>
            {data.projects.slice(0, visibleProjects).map((project) => (
              <Card
                key={project.title}
                title={project.title}
                content={project.description}
                imageUrl={project.imgSrc}
                demoUrl={project.url}
              />
            ))}
          </div>

          {visibleProjects < data.projects.length && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </article>
      </section>
    </div>
  );
};

export default Work;
