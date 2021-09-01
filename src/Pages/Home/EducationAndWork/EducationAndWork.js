import React from "react";

import classes from "./EducationAndWork.module.css";

const EducationAndWork = (props) => {
  return (
    <div className={classes.EducationAndWork}>
      <div className={classes.Work}>
        <div className={classes.SectionTitle}>Work</div>
        <div className={classes.Section}>
          <div className={classes.Header}>
            <div className={classes.Chip}>June, 2021 - Current</div>
            <div className={classes.Name}> - Alo Groups</div>
          </div>
          <div className={classes.Description}>
            <div className={classes.Title}>Full-Stack Developer</div>
            <div className={classes.More}>
              Working on an E-commerce app that delivers food and groceries.
              Currenlty using Flutter and Node js for the application
              development. Also doing Landing Page and Web-Application
              development with React js.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Education}>
        <div className={classes.SectionTitle}>Education</div>
        <div className={classes.Section}>
          <div className={classes.Header}>
            <div className={classes.Chip}>June, 2017 - April, 2021</div>
            <div className={classes.Name}> - Amrita Polytechnic College</div>
          </div>
          <div className={classes.Description}>
            <div className={classes.Title}>Diploma In Computer Engineering</div>
            <div className={classes.More}>
              I have completed diploma course in Computer Engineering with 8+
              GCPA.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndWork;
