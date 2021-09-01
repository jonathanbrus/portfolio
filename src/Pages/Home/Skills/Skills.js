import React from "react";
import { motion } from "framer-motion";

import classes from "./Skills.module.css";

import {
  flutter,
  react,
  node,
  js,
  dart,
  html,
  css,
  arrow,
} from "../../../SVGs";

const svgs = [flutter, react, node, dart, js, html, css];

const Skills = (props) => {
  return (
    <div className={classes.Skils}>
      <div className={classes.Header}>
        <div>Familiar With</div>
        <motion.div
          initial={{ x: -2 }}
          animate={{ x: 8 }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {arrow}
        </motion.div>
        <motion.div
          initial={{ x: -6 }}
          animate={{ x: 2 }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {arrow}
        </motion.div>
      </div>
      <div className={classes.Container}>
        {svgs.map((svg, i) => (
          <div key={i} className={classes.Skill}>
            <div>{svg}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
