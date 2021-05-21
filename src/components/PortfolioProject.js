import React from "react";

const PortfolioProject = ({ project, index }) => {
  return (
    <div
      className={
        index % 2 === 0
          ? "portfolio-section white-bg"
          : "portfolio-section grey-bg"
      }
      id={project.projectTitle}
    >
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="port-img-container">
              <img
                src={project.img}
                alt={`An image showing the ${project.projectTitle} application`}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-12">
                <h3 className="portfolio-header">{project.projectTitle}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="portfolio-desc">{project.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-4">
                <a
                  href={project.github}
                  className="port-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
              <div className="col-2"></div>
              <div className="col-4">
                <a
                  href={project.live}
                  className="port-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
