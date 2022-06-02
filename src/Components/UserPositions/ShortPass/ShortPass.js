import React from "react";
import Football from "../../../assets/Football.png";
import Text from "../../ResuableComponents/Text/Text";
import Attempt from "./Attempt";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";
import { useStyles } from "./ShortPassStyle";

const ShortPass = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>SHORT PASS</h3>
        <img src={Football} alt="" className={classes.FootballImg} />
      </div>
      <div className={classes.TextWrapper}>
        <Text title="RATIO TOUCHES TO TARGET" />
        <Text title="WEAK FOOT USAGE" className={classes.MiddleText} />
        <Text title="TARGET" />
      </div>
      <Attempt title="1ST" />
      <Attempt title="2ND" />
      <div className={classes.ScoreWrapper}>
        <ScoreBoard showNum="ShortPass" />
      </div>
    </div>
  );
};

export default ShortPass;
