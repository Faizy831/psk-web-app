import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import Vector2 from "../../../assets/Vector2.png";
import { useStyles } from "./ScoreBoardStyle";
import { useLocation } from "react-router-dom";
import StatisticAPI from "../../../api/StatisticAPI";

const ScoreBoard = ({ showNum }) => {
  const classes = useStyles();

  const location = useLocation();

  const [FinalScore, SetFinalscore] = useState();

  const finalScore = async () => {
    const PlayerSpeed = await StatisticAPI.getTSPlayerFinalScore(
      location.state.id,
      location.state.trainingSessionID
    );
    SetFinalscore(PlayerSpeed);
  };

  useEffect(() => {
    finalScore();
  }, [location.state.id, location.state.trainingSessionID]);

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
              {showNum === "ShortPass" ? "" : FinalScore}
              <span className={classes.Span}>/99</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
