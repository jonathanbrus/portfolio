import React, { memo } from "react";

import classes from "./TopSection.module.css";

// const Ticker = () => {
//   const [toggle, setToggle] = useState(true);

//   setInterval(() => {
//     setToggle((prev) => !prev);
//   }, 5000);
//   return (
//     <div className={classes.Role}>
//       {toggle ? "Full-Stack Developer" : "Flutter Developer"}
//     </div>
//   );
// };

const TopSection = () => {
  return (
    <div className={classes.TopSection}>
      <div className={classes.ImageContainer}>
        <div
          className={classes.Image}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1627571527819-44dbac656b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80)",
          }}
        ></div>
      </div>
      <div className={classes.AboutContainer}>
        <div className={classes.About}>
          {/* <Ticker /> */}
          <div className={classes.Name}>Jonathan Brus</div>
          <div className={classes.AboutMe}>
            A passionate developer constantly striving to gain more knowledge in
            development field. Responsive Design, clean code and good
            architecturing are my areas of strength in coding. Looking forward
            to provide value and build applications for people with great ideas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopSection);
