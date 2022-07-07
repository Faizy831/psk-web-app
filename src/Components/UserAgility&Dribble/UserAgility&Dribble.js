import React, { useState, useEffect } from "react";
import { useStyle } from "./UserAgilityAndDribbleStyle";
import AgilityIcon from "../../assets/AgilityIcon.png";
import DribbleIcon from "../../assets/DribbleIcon.png";
import ScoreBoard from "../ResuableComponents/ScoreBoard/ScoreBoard";
import AgilityAndDribbleAttempt from "./Components/AgilityAndDribbleAttempt";
import AgilityImg from "../../assets/AgilityImg.png";
import DribbleImg from "../../assets/DribbleImg.png";
import { useLocation } from "react-router-dom";
import StatisticAPI from "../../api/StatisticAPI";

const UserAgilityAndDribble = () => {
  const classes = useStyle();
  const location = useLocation();

  const [firstAttempt, setFirstAttempt] = useState("");
  const [secondAttempt, setSecondAttempt] = useState("");
  const [DribbleFirstAttempt, setDribbleFirstAttempt] = useState("");
  const [DribbleSecondAttempt, setDribbleSecondAttempt] = useState("");

  const playerAgility = async () => {
    const playerAgility = await StatisticAPI.getTSPlayerStatisticAgility(
      location.state.id,
      location.state.trainingSessionID
    );
    playerAgility.map((value) => {
      setFirstAttempt(value.Result[0]);
      setSecondAttempt(value.Result[1]);
    });
  };

  const playerDribble = async () => {
    const playerDribble = await StatisticAPI.getTSPlayerStatisticDribble(
      location.state.id,
      location.state.trainingSessionID
    );
    playerDribble.map((value) => {
      setDribbleFirstAttempt(value.Result[0]);
      setDribbleSecondAttempt(value.Result[1]);
    });
  };

  useEffect(() => {
    playerAgility();
    playerDribble();
  }, [location.state.id, location.state.trainingSessionID]);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.mainContainer}>
        <div className={classes.section1}>
          <div className={classes.header}>
            <h2 className={classes.heading}>AGILITY</h2>
            <img
              src={AgilityIcon}
              alt="agility"
              className={classes.AgilityIcon}
            />
          </div>
          <div>
            <AgilityAndDribbleAttempt
              image={AgilityImg}
              firstTitle="1ST"
              Attempt="ATTEMPT"
              divider={true}
              value={firstAttempt}
            />
            <AgilityAndDribbleAttempt
              image={AgilityImg}
              firstTitle="2ND"
              Attempt="ATTEMPT"
              value={secondAttempt}
            />
          </div>
          <ScoreBoard />
        </div>
        <div className={classes.section2}>
          <div className={classes.header}>
            <h2 className={classes.heading}>DRIBBLE</h2>
            <img
              src={DribbleIcon}
              alt="agility"
              className={classes.DribbleIcon}
            />
          </div>
          <div>
            <AgilityAndDribbleAttempt
              image={DribbleImg}
              firstTitle="1ST"
              Attempt="ATTEMPT"
              divider={true}
              className={classes.DribbleImg}
              value={DribbleFirstAttempt}
            />
            <AgilityAndDribbleAttempt
              image={DribbleImg}
              firstTitle="2ND"
              Attempt="ATTEMPT"
              className={classes.DribbleImg}
              value={DribbleSecondAttempt}
            />
          </div>
          <div>
            <ScoreBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgilityAndDribble;
