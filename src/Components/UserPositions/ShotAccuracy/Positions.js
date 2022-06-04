import React from "react";
import { Divider } from "@material-ui/core";
import { useStyles } from "./ShotAccuracyStyle";

const Positions = ({ title, KilometerText }) => {
  const classes = useStyles();
  return (
    <div className={classes.PositoinsContainer}>
      <div className={classes.Wrapper}>
        <h3 className={classes.PositionHeading}>{title}</h3>
        <p className={classes.KilomeeterText}>{KilometerText}</p>
      </div>
      {title === "3RD" ? "" : <Divider className={classes.Divider} />}
    </div>
  );
};

export default Positions;
