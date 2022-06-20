import React from "react";
import UserProfile from "../../Components/UserProfile/UserProfile";
import { useStyles } from "./TraningSessionPageStyle";

const TraningSessionPage = () => {
  const classes = useStyles;

  return (
    <div className={classes.TraningSessionContainer}>
      <UserProfile />
    </div>
  );
};
export default TraningSessionPage;
