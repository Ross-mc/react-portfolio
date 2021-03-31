import React, { useState } from "react";
import Bio from "../components/Bio";
import PortfolioContainer from "../containers/PortfolioContainer";
import BioArrays from "../utils/BioArrays";
import PortfolioProjects from "../utils/PortfolioProjects";

const Portfolio = () => {
  const [portfolioBio] = useState(BioArrays.PortfolioBio);
  const [portfolioProjectsInState] = useState(PortfolioProjects);
  return (
    <section className="content">
    <Bio bioElements={portfolioBio} />
    <PortfolioContainer portfolioProjects={portfolioProjectsInState} />
    </section>
  )
}

export default Portfolio