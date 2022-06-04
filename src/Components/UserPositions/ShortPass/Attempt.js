import React from "react";
import { useStyles } from "./ShortPassStyle";
import Divider from "@material-ui/core/Divider";
import Numbers from "./Numbers";
import LinearProgress from "@material-ui/core/LinearProgress";

const Attempt = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.AttemptContainer}>
      <h3 className={classes.AttemptHeading}>
        {title}
        <span className={classes.AttemptSpan}>ATTEMPT</span>
      </h3>
      <div className={classes.NumbersWrapper}>
        <Numbers title="1,8" />
        <Numbers title="17%" className={classes.Percentage} />
        <Numbers title="08" />
      </div>
      <div className={classes.ProgressContainer}>
        <div className={classes.ProgressWrapper}>
          <LinearProgress
            variant="determinate"
            value="30"
            className={classes.ProgressBar}
          />
        </div>
      </div>
      {title === "1ST" ? <Divider className={classes.Divider} /> : ""}
    </div>
  );
};

export default Attempt;
