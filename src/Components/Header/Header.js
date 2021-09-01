import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useWindowSize } from "../../Hooks/useWindowSize";

import classes from "./Header.module.css";

import { burgerMenu, close } from "../../SVGs";

const Header = (props) => {
  const [toggle, setToggle] = useState(false);

  let size = useWindowSize();

  const navigate = (path) => {
    if (path !== props.history.location.pathname) {
      props.history.push(path);
    }
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className={classes.Header}>
        <div className={classes.NameContainer}>
          <div className={classes.CircleAvatar}>J</div>
          <div className={classes.Name}>
            <span>Jonathan</span>
            <span>Brus</span>
          </div>
        </div>
        <AnimatePresence exitBeforeEnter={true}>
          {toggle ? (
            <motion.div
              className={classes.BurgerMenu}
              onClick={() => setToggle((prev) => !prev)}
              initial={{ rotateX: "90deg" }}
              animate={{ rotateX: "180deg" }}
              exit={{ rotateX: "90deg" }}
              transition={{ duration: 1.4, ease: "circOut" }}
            >
              {close}
            </motion.div>
          ) : (
            <motion.div
              className={classes.BurgerMenu}
              onClick={() => setToggle((prev) => !prev)}
              initial={{ rotateX: "90deg" }}
              animate={{ rotateX: "0deg" }}
              exit={{ rotateX: "90deg" }}
              transition={{ duration: 1.4, ease: "circOut" }}
            >
              {burgerMenu}
            </motion.div>
          )}
        </AnimatePresence>
        <nav className={classes.LinksContainer}>
          <div onClick={() => navigate("/")} className={classes.Link}>
            Home
          </div>
          <div onClick={() => navigate("/portfolio")} className={classes.Link}>
            Portfolio
          </div>
        </nav>
      </div>
      <AnimatePresence exitBeforeEnter={true}>
        {toggle && size.width < 900 && (
          <motion.div
            className={classes.DropDownMenu}
            initial={{ zIndex: 1, y: -100, opacity: 0, rotateX: "180deg" }}
            animate={{ zIndex: 1, y: 0, opacity: 1, rotateX: "0deg" }}
            exit={{ zIndex: 1, y: -100, opacity: 0, rotateX: "180deg" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div onClick={() => navigate("/")} className={classes.Menu}>
              Home
            </div>
            <div
              onClick={() => navigate("/portfolio")}
              className={classes.Menu}
            >
              Portfolio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default withRouter(Header);
