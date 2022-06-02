import React from "react";
import ShortPass from "./ShortPass/ShortPass";
import ShotAccuracy from "./ShotAccuracy/ShotAccuracy";
import { useStyles } from "./UserPositionsStyle";

const UserPositions = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <ShortPass />
      <ShotAccuracy />
    </div>
  );
};

export default UserPositions;
