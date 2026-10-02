
import "./WorkCardStyles.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="work-container">
      <div className="project-card">
        <img src={props.imgsrc} alt={props.title} />

        <h1 className="project-title">
          {props.title}
        </h1>

        <div className="pro-details">
          <p>{props.text}</p>

          <div className="pro-btns">
            <a
              href={props.views}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Views
            </a>

            <a
              href={props.source}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
