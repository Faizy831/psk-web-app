import React from "react";
import { useStyles } from "./LoginPageStyle";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Logo from "../../assets/Logo.png";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.LoginContainer}>
      <div className={classes.LogoWrapper}>
        <img src={Logo} alt="" className={classes.Logo} />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
