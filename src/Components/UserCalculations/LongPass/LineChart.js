import React from "react";
import { useStyles } from "./LongPassStyle";

const LineChart = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.LineChartContianer}>
      <h1 className={classes.LineChartText}>{title}</h1>
      <span className={classes.Line}></span>
    </div>
  );
};

export default LineChart;
