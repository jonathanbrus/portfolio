import React from "react";

import Project from "./project/project";

import { Projects } from "../../projects";
import classes from "./Portfolio.module.css";

const Portfolio = (props) => {
  return (
    <div className={classes.Portfolio}>
      <div className={classes.Header}>Portfolio</div>
      <div className={classes.ProjectsContainer}>
        {Projects.map((project, i) => {
          return <Project project={project} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
