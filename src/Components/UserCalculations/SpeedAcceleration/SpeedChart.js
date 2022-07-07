import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import Left from "../../../assets/Left.png";
import Right from "../../../assets/Right.png";
import SpeedChartText from "./SpeedChartText";
import { useStyles } from "./SpeedAccelerationStyle";
import { useLocation } from "react-router-dom";
import StatisticAPI from "../../../api/StatisticAPI";

const SpeedChart = () => {
  const classes = useStyles();
  const location = useLocation();

  //SPEED TIME
  const [StartTime1, SetStartTime1] = useState("");
  const [FinishTime1, SetFinishTime1] = useState("");
  const [StartTime2, SetStartTime2] = useState("");
  const [FinishTime2, SetFinishTime2] = useState("");

  //ACCELRATION TIME
  const [AccStartTime1, SetAccStartTime1] = useState("");
  const [AccFinishTime1, SetAccFinishTime1] = useState("");
  const [AccStartTime2, SetAccStartTime2] = useState("");
  const [AccFinishTime2, SetAccFinishTime2] = useState("");

  const Speed =
    (3.6 *
      [
        40 / ((FinishTime1 - StartTime1) * 0.001) +
          40 / ((FinishTime2 - StartTime2) * 0.001),
      ]) /
    2;

  const playerSpeed = Math.round(Speed);

  const PlayerSpeed = async () => {
    const PlayerSpeed = await StatisticAPI.getTSPlayerStatisticSpeed(
      location.state.id,
      location.state.trainingSessionID
    );
    PlayerSpeed.map((time) => {
      SetStartTime1(new Date(time.Result[0]));
      SetFinishTime1(new Date(time.Result[1]));
      SetAccStartTime2(new Date(time.Result[2]));
      SetAccFinishTime2(new Date(time.Result[3]));
    });
  };

  const Acceleration =
    (3.6 *
      [
        40 / ((AccFinishTime1 - AccStartTime1) * 0.001) +
          40 / ((AccFinishTime2 - AccStartTime2) * 0.001),
      ]) /
    2;

  const playerAcceleration = Math.round(Acceleration);

  const PLayerAcceleration = async () => {
    const PLayerAcceleration =
      await StatisticAPI.getTSPlayerStatisticAcceleration(
        location.state.id,
        location.state.trainingSessionID
      );
    PLayerAcceleration.map((time) => {
      SetAccStartTime1(new Date(time.Result[0]));
      SetAccFinishTime1(new Date(time.Result[1]));
      SetStartTime2(new Date(time.Result[2]));
      SetFinishTime2(new Date(time.Result[3]));
    });
  };

  useEffect(() => {
    PlayerSpeed();
    PLayerAcceleration();
  }, [location.state.id, location.state.trainingSessionID]);

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
            <SpeedChartText title="SPEED 40m" Num={playerSpeed} />
            <SpeedChartText
              title="ACCELERATION 10m"
              Num={playerAcceleration}
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
