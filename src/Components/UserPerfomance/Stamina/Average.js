import React from "react";
import { useStyles } from "./StaminaStyle";
import AverageRounds from "./AverageRounds";
import AverageIcon from "../../../assets/AverageIcon.png";

const Average = () => {
  const classes = useStyles();
  return (
    <div className={classes.averageWrpper}>
      <div className={classes.averageConatiner}>
        <div className={classes.AverageHeadin}>
          <h3 className={classes.AverageHeading}>AVERAGE</h3>
          <div className={classes.averageShocase}>
            <AverageRounds average="23S 24MS" rounds="1ST" />
            <AverageRounds average="20S 20MS" rounds="2ND" />
            <AverageRounds average="87%" rounds="FATIGUE" />
          </div>
        </div>
        <div>
          <img src={AverageIcon} className={classes.averageImg} />
        </div>
      </div>
    </div>
  );
};

export default Average;
