import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Home, Officers, News, Resources, Slides, Handouts  } from "./components";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header path="/" />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/officers" exact component={() => <Officers />} />
          <Route path="/news" exact component={() => <News />} />
          <Route path="/resources" exact component={()=> <Resources />} />
          <Route path="/slides" exact component={()=> <Slides />} />
          <Route path="/handouts" exact component={()=> <Handouts />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
