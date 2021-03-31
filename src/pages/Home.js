import React, {useState} from "react";
import BioArrays from "../utils/BioArrays"
import Bio from "../components/Bio"

const Home = () => {
  const [homeBio] = useState(BioArrays.HomeBio)


  return (
    <Bio bioElements={homeBio}/>
  )
}

export default Home