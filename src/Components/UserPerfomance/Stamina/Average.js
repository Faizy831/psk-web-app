import React, { useState, useEffect } from "react";
import { useStyles } from "./StaminaStyle";
import AverageRounds from "./AverageRounds";
import AverageIcon from "../../../assets/AverageIcon.png";
import { useLocation } from "react-router-dom";
import StatisticAPI from "../../../api/StatisticAPI";

const Average = () => {
  const classes = useStyles();
  const location = useLocation();

  const playerStamina = async () => {
    const playerStamina = await StatisticAPI.getTSPlayerStatisticStamina(
      location.state.id,
      location.state.trainingSessionID
    );
    console.log(playerStamina, "playerStamina");
  };

  useEffect(() => {
    playerStamina();
  }, [location.state.id, location.state.trainingSessionID]);

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
