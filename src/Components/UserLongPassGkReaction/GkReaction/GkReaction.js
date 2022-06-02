import React from "react";
import Hands from "../../../assets/Hands.png";
import { useStyles } from "./GkReactionStyle";
import AgilityAndDribbleAttempt from "../../UserAgility&Dribble/Components/AgilityAndDribbleAttempt";
import GkReactionImg from "../../../assets/GkReactionImg.png";
import ScoreBoard from "../../ResuableComponents/ScoreBoard/ScoreBoard";

const GkReaction = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainCotainer}>
      <div className={classes.HeadingWrapper}>
        <h3 className={classes.Heading}>GK REACTION</h3>
        <img src={Hands} alt="" className={classes.HandsImg} />
      </div>
      <div className={classes.Wrapper}>
        <AgilityAndDribbleAttempt
          image={GkReactionImg}
          firstTitle="1ST"
          Attempt="ATTEMPT"
          divider={true}
          className={classes.GkreationImage}
        />
        <AgilityAndDribbleAttempt
          image={GkReactionImg}
          firstTitle="2ND"
          Attempt="ATTEMPT"
          divider={true}
          className={classes.GkreationImage}
        />
        <AgilityAndDribbleAttempt
          image={GkReactionImg}
          firstTitle="3RD"
          Attempt="ATTEMPT"
          className={classes.GkreationImage}
        />
      </div>
      <div className={classes.ScoreWrapper}>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default GkReaction;
