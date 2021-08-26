import {Link} from "react-router-dom"

const BioArrays = {
    HomeBio: [
        <p className="responsive-text" key="first"><span className="blue-text">Ross McIntyre</span></p>,
        <p className="responsive-text"  key="second">web developer <span className="blue-text">/</span> software engineer</p>
    ],
    AboutBio: [
        <p class="responsive-text">My name is <Link to="/" className="blue-text inline-link">
        Ross McIntyre</Link> and I am a web developer / software engineer.</p>,
        <p class="responsive-text">
        I previously worked for many years as a Geotechnical Consultant before discovering a passion for software development and subsequently dedicated
        my time to retraining, including completing the University of Manchester Full Stack Web Development coding bootcamp.
        </p>,
        <p class="responsive-text">
        I have been employed as a Software Engineer at BJSS Ltd since March 2021.
        </p>,
        <p class="responsive-text">
        My primary expertise is web development using Node.js/Express.js for backend development and React.js for frontend development, with MongoDB or MySQL for databases.  I also have experience with Java and Python. View my <Link to="/portfolio" className="blue-text inline-link">
        my portfolio</Link> to see the various projects I have been working on.
        </p>
    ],
    PortfolioBio: [
        <p className="responsive-text"  key="first">My name is <span className="blue-text">Ross McIntyre</span> and I am a web developer and software engineer at BJSS in Manchester</p>,
        <p className="responsive-text"  key="second">I am a Graduate of the <a className="blue-text inline-link" href="https://bootcamp.manchester.ac.uk/">University of Manchester Coding Bootcamp</a></p>,
        <p className="responsive-text"  key="third">I am a Full Stack Web Developer, primary using the MERN stack. I enjoy creating dynamic and intuitive front end UIs with React.js and my back end experience is primary Node.js/Express.js. </p>,
        <p className="responsive-text"  key="fourth">Below is a showcase of some of the projects I have been working on.</p>
    ]
}

export default BioArrays