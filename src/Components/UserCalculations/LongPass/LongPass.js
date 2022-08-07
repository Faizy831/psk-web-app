import React, { useState, useEffect } from "react";
import longpassChart from "../../../assets/longpassChart.png";
import LineChart from "./LineChart";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./LongPassStyle";
import { useLocation } from "react-router-dom";
import StatisticAPI from "../../../api/StatisticAPI";

const LongPass = ({ Heading, img, className }) => {
  const classes = useStyles();

  const location = useLocation();

  const [LongPass, SetLongPass] = useState([]);

  const PlayerLongPass = async () => {
    const PlayerLongPass = await StatisticAPI.getTSPlayerStatisticLongPass(
      location.state.id,
      location.state.trainingSessionID
    );
    SetLongPass(PlayerLongPass);
  };

  useEffect(() => {
    PlayerLongPass();
  }, [location.state.id, location.state.trainingSessionID]);

  return (
    <div className={classes.MainContianer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>{Heading}</h3>
        <img
          src={img}
          alt=""
          className={[classes.LongPass, className].join(" ")}
        />
      </div>
      <div>
        <div className={classes.longpassChart}>
          <img
            src={longpassChart}
            alt=""
            className={classes.longpassChartimg}
          />
        </div>
        <div className={classes.LineChartWrapper}>
          {LongPass.map((result) => {
            return result.Result.map((value) => {
              return <LineChart title={value} />;
            });
          })}
          <LineChart title="START LINE" />
        </div>
      </div>
      <div className={classes.ScoreWrapper}>
        <ScoreBoard showNum="LongPass"/>
      </div>
    </div>
  );
};

export default LongPass;
