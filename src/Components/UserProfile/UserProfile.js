import React from "react";
import Logo from "../../assets/Logo.png";
import UserInfo from "./UserInfo/UserInfo";
import { useStyles } from "./UserProfileStyle";

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.LogoWrapper}>
        <img src={Logo} alt="" className={classes.Logo} />
      </div>
      <div className={classes.ContentWrapper}>
        <UserInfo />
      </div>
    </div>
  );
};

export default UserProfile;
