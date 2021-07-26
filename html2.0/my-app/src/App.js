import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Home, AboutUs, Contact, Officers, News } from "./components";
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header path="/" />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/aboutus" exact component={() => <AboutUs />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/officers" exact component={() => <Officers />} />
          <Route path="/news" exact component={() => <News />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
