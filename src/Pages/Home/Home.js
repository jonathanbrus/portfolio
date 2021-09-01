import React from "react";

import classes from "./Home.module.css";

import TopSection from "./TopSection/TopSection";
import Skills from "./Skills/Skills";
import EducationAndWork from "./EducationAndWork/EducationAndWork";
import Certificates from "./Certificates/Certificates";

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <TopSection />
      <Skills />
      <EducationAndWork />
      <Certificates />
    </div>
  );
};

export default Home;
