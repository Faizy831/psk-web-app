import React from "react";
import LongPass from "../UserCalculations/LongPass/LongPass";
import Hands from "../../assets/Hands.png";
import GkReaction from "./GkReaction/GkReaction";
import { useStyles } from "./UserLongPassGkReactionStyle";

const UserLongPassGkPass = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.ComWrapper}>
        <LongPass Heading="LONG PASS HAND" img={Hands} className={classes.HandImg} />
        <GkReaction />
      </div>
    </div>
  );
};

export default UserLongPassGkPass;
