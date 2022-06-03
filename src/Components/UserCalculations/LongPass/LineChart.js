import React from "react";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./LongPassStyle";

const LineChart = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.LineChartContianer}>
      <h1 className={classes.LineChartText}>{title}</h1>
      <Divider className={classes.Divider} />
    </div>
  );
};

export default LineChart;
