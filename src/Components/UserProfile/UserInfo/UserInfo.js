import React, { useEffect } from "react";
import ProfilePic from "../../../assets/ProfilePic.png";
import Vector from "../../../assets/Vector.png";
import Vector2 from "../../../assets/Vector2.png";
import { useStyles } from "./UserInfoStyle";
import Divider from "@material-ui/core/Divider";
import PlayerAPI from "../../../api/PlayerAPI";
import TrainingSessionDropDown from "../../TrainingSessionDropDown/TrainingSessionDropDown";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

const UserInfo = ({ profile }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.ContainerWrapper}>
      <div className={classes.MainContainer}>
        <div className={classes.UserInfoWrapper}>
          <div className={classes.AgeWrapper}>
            <h3 className={classes.AgeText}>Age</h3>
            <h3 className={classes.AgeNumber}>12</h3>
          </div>
          <div>
            <h3 className={classes.info}>
              Height <span className={classes.Num}>12</span>
            </h3>
            <h3 className={classes.info}>
              Weight <span className={classes.Num}>12</span>
            </h3>
            <h3 className={classes.info}>
              IMC <span className={classes.Num}>12</span>
            </h3>
          </div>
        </div>
        <div className={classes.UserPofileWrapper}>
          <div className={classes.AvatarWrapper}>
            <img src={ProfilePic} alt="" className={classes.Avatar} />
            <div className={classes.AgeGroupWrapper}>
              <h3 className={classes.AgeGroup}>AGE GROUP</h3>
              <img src={Vector} alt="" className={classes.Vector} />
              <h3 className={classes.IniciadosText}>INICIADOS</h3>
            </div>
          </div>
          <div className={classes.TextWrapper}>
            <div className={classes.ResponsiveWrapper}>
              <h3 className={classes.FranciscoText}>Francisco </h3>
              <h3 className={classes.VinagreText}>Vinagre</h3>
            </div>
          </div>
        </div>
        <div className={classes.DateWrapper}>
          <h3 className={classes.DateText}>Date</h3>
          <h3 className={classes.DateNum}>03</h3>
          <h3 className={clsx(classes.DateNum, classes.SecondNum)}>22</h3>
        </div>
      </div>
      <div className={classes.DiverContainer}>
        <Divider className={classes.Divider} />
      </div>
      {location.pathname === "/Dashboard" ? (
        <div className={classes.FinalScoreWrapper}>
          <div className={classes.FinalTextWrapper}>
            <img src={Vector2} alt="" className={classes.Vector2} />
            <h3 className={classes.FinalText}>FINAL SCORE</h3>
          </div>
          <h3 className={classes.ScoreNumber}>77</h3>
        </div>
      ) : (
        <div className={classes.DropDownWrapper}>
          <TrainingSessionDropDown />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
