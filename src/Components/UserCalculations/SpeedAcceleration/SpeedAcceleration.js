import React from "react";
import Clock from "../../../assets/Clock.png";
// import SpeedChart from "../SpeedAcceleration/SpeedChart";
import SpeedChart from "../../../assets/speedChart.png";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./SpeedAccelerationStyle";

const SpeedAcceleration = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>
          SPEED AND <span className={classes.SpanResponsive}>ACCELERATION</span>
        </h3>
        <img src={Clock} alt="" className={classes.Clock} />
      </div>
      <div className={classes.ChartWrapper}>
        {/* <SpeedChart /> */}
        <img src={SpeedChart} alt="" className={classes.SpeedChartimg} />
      </div>
      <div className={classes.Wrapper}>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default SpeedAcceleration;
