// Card.js

import React from "react";
import PropTypes from "prop-types";
// import "./Card.css";

const Card = ({ title, content, imageUrl, demoUrl }) => {
  return (
    <div className="card" alig>
      {imageUrl && <img className="card-image" src={imageUrl} alt={title} />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        {demoUrl && (
          <a
            className="card-link"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  demoUrl: PropTypes.string,
};

export default Card;
