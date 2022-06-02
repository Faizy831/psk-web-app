import React from "react";
import longpassChart from "../../../assets/longpassChart.png";
import LineChart from "./LineChart";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./LongPassStyle";

const LongPass = ({ Heading, img, className }) => {
  const classes = useStyles();
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
          <LineChart title="25 M" />
          <LineChart title="20 M" />
          <LineChart title="15 M" />
          <LineChart title="10 M" />
          <LineChart title="5 M" />
          <LineChart title="START LINE" />
        </div>
      </div>
      <div>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default LongPass;
