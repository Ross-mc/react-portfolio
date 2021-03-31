import React from "react";
import PortfolioProject from "../components/PortfolioProject"
const PortfolioContainer = ({portfolioProjects}) => {
    return (
    <>
      {portfolioProjects.map((project, index) => (
        <PortfolioProject
          project={project}
          key={project.projectTitles}
          index={index}
        />
      ))}
    </>
  );
};

export default PortfolioContainer;
