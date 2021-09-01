import React from "react";

import classes from "./Certificates.module.css";

const Certificates = (props) => {
  return (
    <div className={classes.Certificates}>
      <div className={classes.SectionTitle}>Certificates</div>
      <div className={classes.Container}>
        <a
          className={classes.Section}
          href="https://www.udemy.com/certificate/UC-77e4c866-81b6-4eb6-b9e5-5f62c2e9d4ea/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.Name}>React Js</div>
          <div className={classes.Description}>
            <div className={classes.Title}>
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </div>
            <div className={classes.AboutCourse}>
              Dive in and learn React.js from scratch! Learn Reactjs.
            </div>
            <div className={classes.Date}>March 28 2021</div>
          </div>
        </a>
        <a
          className={classes.Section}
          href="https://www.udemy.com/certificate/UC-39e717f8-842b-44bb-9733-802b5a448c35/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.Name}>Node Js</div>
          <div className={classes.Description}>
            <div className={classes.Title}>
              NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
            </div>
            <div className={classes.AboutCourse}>
              Master Node JS & Deno.js, build REST APIs with Node.js.
            </div>
            <div className={classes.Date}> May 18 2021</div>
          </div>
        </a>
        <a
          className={classes.Section}
          href="https://www.udemy.com/certificate/UC-e37e58f2-f60a-4cf3-892c-2defec996f7d/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.Name}>Flutter</div>
          <div className={classes.Description}>
            <div className={classes.Title}>
              Flutter & Dart - The Complete Guide [2021 Edition]
            </div>
            <div className={classes.AboutCourse}>
              A Complete Guide to the Flutter SDK & Flutter Framework
            </div>
            <div className={classes.Date}>July 7 2021</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Certificates;
