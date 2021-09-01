import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" render={() => <Home />} exact />
        <Route path="/portfolio" render={() => <Portfolio />} exact />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
