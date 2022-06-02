import React from "react";
import StaminaImg from "../../../assets/stamina.png";
import { useStyles } from "./StaminaStyle";
import Average from "./Average";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";

const Stamina = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>STAMINA</h3>
        <img src={StaminaImg} alt="" className={classes.StaminaImg} />
      </div>
      <div>
        <Average />
      </div>
      <div className={classes.ScoreWrapper}>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default Stamina;
