import React from "react";
import FooterIcon from "../../assets/FooterIcon.png";
import EmailIcon from "../../assets/EmailIcon.png";
import CompasIcon from "../../assets/CompasIcon.png";
import { useStyles } from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div>
          <img src={FooterIcon} alt="" className={classes.FooterIcon} />
        </div>
        <div className={classes.showcase}>
          <div className={classes.emailWrapper}>
            <img src={EmailIcon} alt="" className={classes.EmailIcon} />
            <p className={classes.Email}>geral@PSKanalytics.com</p>
          </div>
          <div className={classes.compasWrapper}>
            <img src={CompasIcon} alt="" className={classes.CompasIcon} />
            <p className={classes.Site}>www.pskanalytics.com</p>
          </div>
        </div>
        <div className={classes.footerText}>
          <h2> Analytics 2022</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
