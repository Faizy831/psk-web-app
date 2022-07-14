import React, { useState, useEffect } from "react";
import Football from "../../../assets/Football.png";
import Text from "../../ResuableComponents/Text/Text";
import Attempt from "./Attempt";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./ShortPassStyle";
import { useLocation } from "react-router-dom";
import StatisticAPI from "../../../api/StatisticAPI";

const ShortPass = () => {
  const classes = useStyles();

  const location = useLocation();

  const ShortPass = async () => {
    const ShortPass = await StatisticAPI.getTSPlayerStatisticShortPass(
      location.state.id,
      location.state.trainingSessionID
    );
  };

  const Touches = async () => {
    const Touches = await StatisticAPI.getTSPlayerStatisticTouches(
      location.state.id,
      location.state.trainingSessionID
    );
  };

  useEffect(() => {
    ShortPass();
    Touches();
  }, [location.state.id, location.state.trainingSessionID]);

  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>SHORT PASS</h3>
        <img src={Football} alt="" className={classes.FootballImg} />
      </div>
      <div className={classes.TextWrapper}>
        <Text title="RATIO TOUCHES TO TARGET" className={classes.TouchesText} />
        <Text title="WEAK FOOT USAGE" className={classes.MiddleText} />
        <Text title="TARGET" />
      </div>
      <Attempt title="1ST" />
      <Attempt title="2ND" />
      <div className={classes.ScoreWrapper}>
        <ScoreBoard showNum="ShortPass" />
      </div>
    </div>
  );
};

export default ShortPass;
