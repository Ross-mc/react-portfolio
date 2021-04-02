import React, {useState} from "react";
import BioArrays from "../utils/BioArrays";
import Bio from "../components/Bio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skills from "../icons/skills"

const About = () => {
  const [aboutBio] = useState(BioArrays.AboutBio);

  return (
    <section className="content">
      <Bio bioElements={aboutBio}/>
      <div className="lang-container">
        {skills.map(skill => <FontAwesomeIcon icon={skill} />)}
      </div>
    </section>
  )
}

export default About