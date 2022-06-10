import React from "react";
import VerticalJumpLogo from "../../../assets/VerticalJump.png";
// import VerticalJumpChart from "./VerticalJumpChart";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./VerticalJumpStyle";

const VerticalJump = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>VERTICAL JUMP</h3>
        <img src={VerticalJumpLogo} alt="" className={classes.VerticalJumpImg} />
      </div>
      <div>
        {/* <VerticalJumpChart /> */}
      </div>
      <div className={classes.ScoreBoardWrapper}>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default VerticalJump;
