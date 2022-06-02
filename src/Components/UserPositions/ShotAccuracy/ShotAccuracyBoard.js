import React from "react";
import ShotBoard from "../../../assets/ShotBoard.png";
import ShotNumbers from "./ShotNumbers";
import { useStyles } from "./ShotAccuracyStyle";

const ShotAccuracyBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.AccuracyBoardContainer}>
      <div className={classes.NumWrapper}>
        <ShotNumbers title="1" />
        <ShotNumbers title="2" className={classes.MiddleNumber} />
        <ShotNumbers title="3" />
      </div>
      <img src={ShotBoard} alt="" className={classes.ShotBoardImg} />
    </div>
  );
};

export default ShotAccuracyBoard;
