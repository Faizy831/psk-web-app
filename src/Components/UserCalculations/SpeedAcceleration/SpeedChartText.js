import React from "react";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./SpeedAccelerationStyle";

const SpeedChartText = ({ value, className, title, Num }) => {
  const classes = useStyles();
  return (
    <div className={classes.TextComponentContainer}>
      <div className={[classes.SpeedWrapper, className].join("")}>
        <h3 className={classes.SpeedText}>{title}</h3>
        <h3 className={classes.SpeedNumber}>
          {Num}
          <span className={classes.spanText}>km/h</span>
        </h3>
      </div>
      {value === "Acceleration" ? "" : <Divider className={classes.Divider} />}
    </div>
  );
};

export default SpeedChartText;
