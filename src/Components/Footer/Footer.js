import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.SocialLinks}>
        <a
          href="https://twitter.com/brus_jonathan?s=08"
          className={classes.Link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/joey.__10/?hl=en"
          className={classes.Link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className={classes.CopyWrite}>© 2021 All rights reserved.</div>
    </div>
  );
};

export default Footer;
