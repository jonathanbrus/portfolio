import React from "react";

import classes from "./project.module.css";

const Chip = (props) => {
  return <div className={classes.Chip}>{props.children}</div>;
};

const Project = (props) => {
  return (
    <div className={classes.Project}>
      <div className={classes.Details}>
        <div className={classes.Stack}>
          {props.project.stacks.map((stack, i) => (
            <Chip key={i}>{stack}</Chip>
          ))}
        </div>
        <div className={classes.Description}>{props.project.desc}</div>
        <a
          href={props.project.gitUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className={classes.Title}>{props.project.title}</div>
      <img src={props.project.img} alt={props.project.title} />
    </div>
  );
};

export default Project;
