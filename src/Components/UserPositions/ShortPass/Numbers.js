import React from "react";
import { useStyles } from "./ShortPassStyle";

const Numbers = ({ title, className }) => {
  const classes = useStyles();
  return (
    <div className={classes.NumbersContainer}>
      <h3 className={[classes.Numbers, className].join(" ")}>{title}</h3>
    </div>
  );
};

export default Numbers;
