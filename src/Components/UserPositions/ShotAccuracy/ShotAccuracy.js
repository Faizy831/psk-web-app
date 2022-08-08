import React, { useState, useEffect } from "react";
import Shot from "../../../assets/shot.png";
import ShotAccuracyBoard from "./ShotAccuracyBoard";
import Text from "../../ResuableComponents/Text/Text";
import Positions from "./Positions";
import Numbers from "../ShortPass/Numbers";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./ShotAccuracyStyle";
import { useLocation } from "react-router-dom";
import DataAPI from "../../../api/DataAPI";
import StatisticAPI from "../../../api/StatisticAPI";

const ShotAccuracy = () => {
  const classes = useStyles();
  const location = useLocation();

  const [FirstAttempt, SetFirstAttempt] = useState();
  const [SecondAttempt, SetSecondAttempt] = useState();
  const [ThirdAttempt, SetThirdAttempt] = useState();

  const firstattemptResult = async () => {
    const firstattempt = await StatisticAPI.getTSPlayerStatisticShooting(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(firstattempt[0].Result[0]) == "-1"){
      SetFirstAttempt("-");
    }else{
      SetFirstAttempt(parseInt(firstattempt[0].Result[0])+" Km/h");
    }
  };

  const secondattemptResult = async () => {
    const secondattempt = await StatisticAPI.getTSPlayerStatisticShooting(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(secondattempt[0].Result[4]) == "-1"){
      SetSecondAttempt("-");
    }else{
      SetSecondAttempt(parseInt(secondattempt[0].Result[4])+" Km/h");
    }
  };

  const thirdattemptResult = async () => {
    const thirdattempt = await StatisticAPI.getTSPlayerStatisticShooting(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(thirdattempt[0].Result[8]) == "-1"){
      SetThirdAttempt("-");
    }else{
      SetThirdAttempt(parseInt(thirdattempt[0].Result[8])+" Km/h");
    }
  };

  useEffect(() => {
    firstattemptResult();
    secondattemptResult();
    thirdattemptResult();
  }, [location.state.id, location.state.trainingSessionID]);

  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>SHORT ACCURACY</h3>
        <img src={Shot} alt="" className={classes.ShotImg} />
      </div>
      <ShotAccuracyBoard />
      <div className={classes.ResponsiveWrapper}>
        <div className={classes.TextWrapper}>
          <Text title="SHOT POWER" />
          <Text title="SHOT ACCURACY" />
        </div>
        <div className={classes.ShotWrapper}>
          <Numbers title="90" className={classes.shotPowerNumber} />
          <Numbers title="55" />
        </div>
      </div>
      <div className={classes.PositionWrapper}>
        <Positions title="1ST" KilometerText={FirstAttempt} />
        <Positions
          title="2ND"
          KilometerText={SecondAttempt}
          className={classes.SecondText}
        />
        <Positions title="3RD" KilometerText={ThirdAttempt} />
      </div>
      <div className={classes.ScoreWrapper}>
        <ScoreBoard showNum="Shooting" />
      </div>
    </div>
  );
};

export default ShotAccuracy;
