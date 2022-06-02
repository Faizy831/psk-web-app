import React from "react";
import Divider from "@material-ui/core/Divider";
import Vector2 from "../../../assets/Vector2.png";
import { useStyles } from "./ScoreBoardStyle";

const ScoreBoard = ({ showNum }) => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Wrapper}>
        <Divider className={classes.Divider} />
        <div className={classes.ScoreWrapper}>
          <div className={classes.TextWrapper}>
            <img src={Vector2} alt="" className={classes.Vector2} />
            <h2 className={classes.scoreText}>SCORE</h2>
          </div>
          <div className={classes.ScoreNumber}>
            <h3 className={classes.ScoreNum}>
              {showNum === "ShortPass" ? "" : 77}
              <span className={classes.Span}>/99</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
