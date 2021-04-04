import './App.css';
import './dropdown.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const displayFullNav = useMediaQuery({query: '(min-width: 1000px)'});//returns true when the screen is bigger than 1000px


  return (
    <>
      <div className="bg-img" />
      <Router>
        <header>
         {displayFullNav ? <NavBar /> : <MobileNav />}
        </header>
        <div className ="my-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;