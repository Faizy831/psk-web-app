import React from "react";
import Shot from "../../../assets/shot.png";
import ShotAccuracyBoard from "./ShotAccuracyBoard";
import Text from "../../ResuableComponents/Text/Text";
import Positions from "./Positions";
import Numbers from "../ShortPass/Numbers";
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
        <Positions title="1ST" KilometerText="0 Km/h" />
        <Positions
          title="2ND"
          KilometerText="113 Km/h"
          className={classes.SecondText}
        />
        <Positions title="3RD" KilometerText="110 Km/h" />
      </div>
      <div className={classes.ScoreWrapper}>
        <ScoreBoard showNum="ShortPass" />
      </div>
    </div>
  );
};

export default ShotAccuracy;
