import React from "react";
import SpeedAcceleration from "./SpeedAcceleration/SpeedAcceleration";
import LongPassLogo from "../../assets/LongPass.png";
import LongPass from "./LongPass/LongPass";
import { useStyles } from "./UserCalculationsStyle";

const UserCalculations = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.ComWrapper}>
        <SpeedAcceleration />
        <LongPass Heading="LONG PASS" img={LongPassLogo} />
      </div>
    </div>
  );
};

export default UserCalculations;
