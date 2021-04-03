import './App.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const displayFullNav = useMediaQuery({query: '(min-width: 1200px)'});


  return (
    <>
      <div className="bg-img" />
      <Router>
        <header>
         {displayFullNav ? <NavBar /> : <h1>Mobile Nav to go here</h1>}
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