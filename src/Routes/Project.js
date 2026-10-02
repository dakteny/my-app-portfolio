
import React from "react";
import WorkCard from "../components/WorkCard";
import ProjectCardData from "../components/WorkCardData";
import PricingCard from "../components/PricingCard";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar.js';

const Project = () => {
  return (
    <div>
      <Navbar />
      <h1 className="project-heading">Projects</h1>

      <div className="project-container">
        {ProjectCardData.map((project, index) => (
          <WorkCard
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            source={project.source}
            views={project.views}
            text={project.text}
          />
        ))}
      </div>
      <PricingCard/>
      <Footer/>
    </div>
  );
};

export default Project;
