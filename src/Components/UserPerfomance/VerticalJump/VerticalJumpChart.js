import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { LinearGauge } from "@progress/kendo-react-gauges";
import { useStyles } from "./VerticalJumpStyle";

const LinearGaugeComponent = () => {
  const classes = useStyles();
  const linearOptions = {
    pointer: [
      {
        value: 40,
        color: "#ffd246",
        shape: "arrow",
      },
      {
        value: 20,
        color: "#28b4c8",
        shape: "arrow",
      },
      {
        value: 30,
        color: "#78d237",
        shape: "arrow",
      },
    ],
  };
  return <LinearGauge {...linearOptions} min={0} max={10} />;
};
export default LinearGaugeComponent;
