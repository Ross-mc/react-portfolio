import React, { useState } from "react";
import BioArrays from "../utils/BioArrays"
import Bio from "../components/Bio"

const Portfolio = () => {
  const [portfolioBio] = useState(BioArrays.PortfolioBio)
  return (
    <section className="content">
    <Bio bioElements={portfolioBio} />
    </section>
  )
}

export default Portfolio