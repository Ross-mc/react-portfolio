import React from "react";
import PortfolioProject from "../components/PortfolioProject"
const PortfolioContainer = ({portfolioProjects}) => {
    return (
    <>
      {portfolioProjects.map((project, index) => (
        <PortfolioProject
          project={project}
          key={project.projectTitle}
          index={index}
        />
      ))}
    </>
  );
};

export default PortfolioContainer;
