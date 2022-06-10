import React from "react";
import GaugeChart from "react-gauge-chart";
import Left from "../../../assets/Left.png";
import Right from "../../../assets/Right.png";
import SpeedChartText from "./SpeedChartText";
import { useStyles } from "./SpeedAccelerationStyle";

const SpeedChart = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.SpeedChartContainer}>
        <img src={Left} alt="" className={classes.Img} />
        <div className={classes.ChartContainer}>
          <GaugeChart
            className={classes.Chart}
            id="gauge-chart3"
            nrOfLevels={30}
            colors={["#6CC5DC", "#5B3A81"]}
            arcWidth={0.2}
            marginInPercent={0}
            needleColor={["none"]}
            needleBaseColor={["none"]}
            hideText={true}
          />
          <div className={classes.TextWrapper}>
            <SpeedChartText title="SPEED 40m" Num="24,4" />
            <SpeedChartText
              title="ACCELERATION 10m"
              Num="18,8"
              value="Acceleration"
              className={classes.AccelerationWrapper}
            />
          </div>
          <div className={classes.ChartBottomText}>
            <p className={classes.BottomText}>0</p>
            <p className={classes.BottomText}>40</p>
          </div>
        </div>
        <img src={Right} alt="" className={classes.Img} />
      </div>
    </>
  );
};

export default SpeedChart;
