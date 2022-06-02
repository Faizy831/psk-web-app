import React from "react";
import { useStyles } from "./ShotAccuracyStyle";

const ShotNumbers = ({ title, className }) => {
  const classes = useStyles();
  return (
    <div className={classes.ShotNumber}>
      <div className={[classes.NumberWrapper, className].join(" ")}>
        <h3 className={classes.Num}>{title}</h3>
      </div>
    </div>
  );
};

export default ShotNumbers;
