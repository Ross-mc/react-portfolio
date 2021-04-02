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
      <div className="lang-container" style={{textAlign: "center", marginTop: "25px"}}>
        {skills.map(skill => <FontAwesomeIcon icon={skill} style={{fontSize: 44, marginLeft: 8}} />)}
      </div>
    </section>
  )
}

export default About