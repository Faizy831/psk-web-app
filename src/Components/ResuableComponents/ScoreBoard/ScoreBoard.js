import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import Vector2 from "../../../assets/Vector2.png";
import { useStyles } from "./ScoreBoardStyle";
import { useLocation } from "react-router-dom";
import StatisticAPI from "../../../api/StatisticAPI";
import DataAPI from "../../../api/DataAPI";

const ScoreBoard = ({ showNum }) => {
  const classes = useStyles();

  const location = useLocation();
  const [FinalScore, SetFinalscore] = useState();
  const [SpeedScore, SetSpeedScore] = useState();
  const [AccelerationScore, SetAccelerationScore] = useState();
  const [LongPassScore, SetLongPassScore] = useState();
  const [ShortPassScore, SetShortPassScore] = useState();
  const [ShootingScore, SetShootingScore] = useState();
  const [VerticalJumpScore, SetVerticalJumpScore] = useState();
  const [StaminaScore, SetStaminaScore] = useState();
  const [AgilityScore, SetAgilityScore] = useState();
  const [DribbleScore, SetDribbleScore] = useState();
  const [LongPassHandScore, SetLongPassHandScore] = useState();
  const [GoalKeeperScore, SetGoalKeeperScore] = useState();

  const finalScore = async () => {
    const PlayerSpeed = await StatisticAPI.getTSPlayerFinalScore(
      location.state.id,
      location.state.trainingSessionID
    );
    SetFinalscore(PlayerSpeed);
  };

  //Speed Score
  const speedScore = async () => {
    const speed = await DataAPI.getPlayerTrainingSessionSpeedData(
      location.state.id,
      location.state.trainingSessionID
    );
    SetSpeedScore(parseInt(speed[0].Data[0]));
  };

  //Acceleration Score
  const accelerationScore = async () => {
    const acceleration = await DataAPI.getPlayerTrainingSessionAccelerationData(
      location.state.id,
      location.state.trainingSessionID
    );
    SetAccelerationScore(parseInt(acceleration[0].Data[0]));
  };

  //LongPass Score
  const longpassScore = async () => {
    const longpass = await DataAPI.getPlayerTrainingSessionLongPassData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(longpass[0].Data[0]) == "-1"){
      SetLongPassScore("-");
    }else{
      SetLongPassScore(parseInt(longpass[0].Data[0]));
    }
  };

  //ShortPass Score
  const shortpassScore = async () => {
    const shortpass = await DataAPI.getPlayerTrainingSessionShortPassData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(shortpass[0].Data[0]) == "-1"){
      SetShortPassScore("-");
    }else{
      SetShortPassScore(parseInt(shortpass[0].Data[0]));
    }
  };

  //Shooting Score
  const shootingScore = async () => {
    const shooting = await DataAPI.getPlayerTrainingSessionShootingData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(shooting[0].Data[0]) == "-1"){
      SetShootingScore("-");
    }else{
      SetShootingScore(parseInt(shooting[0].Data[0]));
    }
  };

  //VerticalJump Score
  const verticaljumpScore = async () => {
    const verticaljump = await DataAPI.getPlayerTrainingSessionVerticalJumpData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(verticaljump[0].Data[0]) == "-1"){
      SetVerticalJumpScore("-");
    }else{
      SetVerticalJumpScore(parseInt(verticaljump[0].Data[0]));
    }
  };

  //Stamina Score
  const staminaScore = async () => {
    const stamina = await DataAPI.getPlayerTrainingSessionStaminaData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(stamina[0].Data[0]) == "-1"){
      SetStaminaScore("-");
    }else{
      SetStaminaScore(parseInt(stamina[0].Data[0]));
    }
  };

  //Agility Score
  const agilityScore = async () => {
    const agility = await DataAPI.getPlayerTrainingSessionAgilityData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(agility[0].Data[0]) == "-1"){
      SetAgilityScore("-");
    }else{
      SetAgilityScore(parseInt(agility[0].Data[0]));
    }
  };

  //Dribble Score
  const dribbleScore = async () => {
    const dribble = await DataAPI.getPlayerTrainingSessionDribbleData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(dribble[0].Data[0]) == "-1"){
      SetDribbleScore("-");
    }else{
      SetDribbleScore(parseInt(dribble[0].Data[0]));
    }
  };

  //LongPassHand Score
  const longpasshandScore = async () => {
    const longpasshand = await DataAPI.getPlayerTrainingSessionLongPassHandData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(longpasshand[0].Data[0]) == "-1"){
      SetLongPassHandScore("-");
    }else{
      SetLongPassHandScore(parseInt(longpasshand[0].Data[0]));
    }
  };

  //Goalkeeper Score
  const goalkeeperScore = async () => {
    const goalkeeper = await DataAPI.getPlayerTrainingSessionGoalKeeperData(
      location.state.id,
      location.state.trainingSessionID
    );
    if(parseInt(goalkeeper[0].Data[0]) == "-1"){
      SetGoalKeeperScore("-");
    }else{
      SetGoalKeeperScore(parseInt(goalkeeper[0].Data[0]));
    }
  };

  useEffect(() => {
    finalScore();
    speedScore();
    accelerationScore();
    longpassScore();
    shortpassScore();
    shootingScore();
    verticaljumpScore();
    staminaScore();
    agilityScore();
    dribbleScore();
    longpasshandScore();
    goalkeeperScore();
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
              {showNum === "ShortPass" ? ShortPassScore:
              showNum === "LongPass" ? LongPassScore:
              showNum === "VerticalJump" ? VerticalJumpScore:
              showNum === "Stamina" ? StaminaScore:
              showNum === "Agility" ? AgilityScore:
              showNum === "Dribble" ? DribbleScore:
              showNum === "LongPassHand" ? LongPassHandScore:
              showNum === "Goalkeeper" ? GoalKeeperScore:
              showNum === "Shooting" ? ShootingScore:
              showNum === "Speed" ? (SpeedScore + AccelerationScore)/2: FinalScore}
              <span className={classes.Span}>/99</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
