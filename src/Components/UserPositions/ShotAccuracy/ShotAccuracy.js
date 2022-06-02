import React from "react";
import Shot from "../../../assets/shot.png";
import ShotAccuracyBoard from "./ShotAccuracyBoard";
import Text from "../../ResuableComponents/Text/Text";
import Positions from "./Positions";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./ShotAccuracyStyle";

const ShotAccuracy = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>SHORT ACCURACY</h3>
        <img src={Shot} alt="" className={classes.ShotImg} />
      </div>
      <ShotAccuracyBoard />
      <div className={classes.TextWrapper}>
        <Text title="SHOT POWER" />
        <Text title="SHOT ACCURACY" />
      </div>
      <div className={classes.PositionWrapper}>
        <Positions title="1ST" />
        <Positions title="2ND" className={classes.SecondText} />
        <Positions title="3RD" />
      </div>
      <div className={classes.ScoreWrapper}>
        <ScoreBoard showNum="ShortPass" />
      </div>
    </div>
  );
};

export default ShotAccuracy;
