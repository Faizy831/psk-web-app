import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./LoginFormStyle";

const Btn = ({ title, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.BtnContainer}>
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        className={classes.Button}
      >
        {title}
      </Button>
    </div>
  );
};

export default Btn;
