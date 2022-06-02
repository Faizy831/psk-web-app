import React from "react";
import { useStyles } from "./StaminaStyle";

const AverageRounds = ({ rounds, average }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.roundContainer}>
        <h3 className={classes.rounds}>
          {rounds}
          <span className={classes.RoundSpan}>ROUND</span>
        </h3>
        <h3 className={classes.averageText}>{average}</h3>
      </div>
      {rounds === "FATIGUE" ? null : <div className={classes.divider}></div>}
    </div>
  );
};

export default AverageRounds;
