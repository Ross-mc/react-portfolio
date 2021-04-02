import React, {useState} from "react";
import BioArrays from "../utils/BioArrays"
import Bio from "../components/Bio"

const About = () => {
  const [aboutBio] = useState(BioArrays.AboutBio)


  return (
    <section className="content">
      <Bio bioElements={aboutBio}/>
    </section>
  )
}

export default About