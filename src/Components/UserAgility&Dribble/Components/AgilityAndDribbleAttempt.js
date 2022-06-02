import React from "react";
import { useStyle } from "../UserAgilityAndDribbleStyle";

const AgilityAndDribbleAttempt = ({
  image,
  firstTitle,
  Attempt,
  className,
  divider,
}) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.showcase}>
        <h3 className={classes.AttemptText}>
          {firstTitle} <br /> {Attempt}
        </h3>
        <img src={image} className={[classes.large, className].join(" ")} />
        <h3 className={classes.Attemptnbr}>31</h3>
      </div>
      {divider && <div className={classes.divider}></div>}
    </div>
  );
};

export default AgilityAndDribbleAttempt;
