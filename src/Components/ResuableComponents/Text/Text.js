import React from "react";
import Shortpass from "../../../assets/Shortpass.png";
import { useStyles } from "./TextStyle";

const Text = ({ title, className }) => {
  console.log(className, "class");
  const classes = useStyles();
  return (
    <div className={classes.TextContainer}>
      <h3 className={[classes.Text, className].join(" ")}>{title}</h3>
      <div className={classes.IconWrapper}>
        {title === "TARGET" ? (
          <img src={Shortpass} className={classes.TextIcon} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Text;
