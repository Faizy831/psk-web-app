import React from "react";
import VerticalJump from "./VerticalJump/VerticalJump";
import Stamina from "./Stamina/Stamina";
import { useStyles } from "./UserPerfomanceStyle";

const UserPerfomance = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.ComWrapper}>
        <VerticalJump />
        <Stamina />
      </div>
    </div>
  );
};

export default UserPerfomance;
