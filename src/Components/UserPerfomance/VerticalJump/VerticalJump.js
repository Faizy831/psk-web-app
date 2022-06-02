import React from "react";
import VerticalJumpImg from "../../../assets/VerticalJump.png";
import VerticaljumpImg from "../../../assets/verticaljump.png";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./VerticalJumpStyle";

const VerticalJump = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>VERTICAL JUMP</h3>
        <img src={VerticalJumpImg} alt="" className={classes.VerticalJumpImg} />
      </div>
      <div className={classes.VerticalJumpGraphWrapper}>
        <img
          src={VerticaljumpImg}
          alt=""
          className={classes.VerticaljumpGraphImg}
        />
      </div>
      <div className={classes.ScoreBoardWrapper}>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default VerticalJump;
