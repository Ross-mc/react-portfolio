import './App.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";



const App = () => {
  return (
    <>
      <div className="bg-img" />
      <div className ="my-container">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
      <Footer />
      </div>
    </>
  );
}

export default App;