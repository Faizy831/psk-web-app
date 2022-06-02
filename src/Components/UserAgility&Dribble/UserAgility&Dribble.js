import React from "react";
import { useStyle } from "./UserAgilityAndDribbleStyle";
import AgilityIcon from "../../assets/AgilityIcon.png";
import DribbleIcon from "../../assets/DribbleIcon.png";
import ScoreBoard from "../ResuableComponents/ScoreBoard/ScoreBoard";
import AgilityAndDribbleAttempt from "./Components/AgilityAndDribbleAttempt";
import AgilityImg from "../../assets/AgilityImg.png";
import DribbleImg from "../../assets/DribbleImg.png";

const UserAgilityAndDribble = () => {
  const classes = useStyle();
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
            />
            <AgilityAndDribbleAttempt
              image={AgilityImg}
              firstTitle="2ND"
              Attempt="ATTEMPT"
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
            />
            <AgilityAndDribbleAttempt
              image={DribbleImg}
              firstTitle="2ND"
              Attempt="ATTEMPT"
              className={classes.DribbleImg}
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
