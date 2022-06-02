import React from "react";
import { Divider } from "@material-ui/core";
import { useStyles } from "./ShotAccuracyStyle";

const Positions = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.PositoinsContainer}>
      <h3 className={classes.PositionHeading}>{title}</h3>
      {title === "3RD" ? "" : <Divider className={classes.Divider} />}
    </div>
  );
};

export default Positions;
