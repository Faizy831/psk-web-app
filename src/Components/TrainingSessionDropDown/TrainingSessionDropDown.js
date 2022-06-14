import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { useStyles } from "./TrainingSessionDropDownStyle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "../LoginForm/Btn";
import { Link } from "react-router-dom";

const top100Films = [
  { title: "Pakistan" },
  { title: "UK" },
  { title: "England" },
];

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <div className={classes.LoginContainer}>
      <div className={classes.DropDownContianer}>
        <div className={classes.DropDownWrapper}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={classes.DropDownLable}
          >
            TRAINING SESSION
          </InputLabel>
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            className={classes.DropDown}
            hiddenLabel="true"
            renderInput={(params) => (
              <TextField
                placeholder="Training Session"
                {...params}
                variant="outlined"
              />
            )}
          />
        </div>
        <div className={classes.ButtonWrapper}>
          <Link to="/Dashboard" className={classes.Link}>
            <Button title="CONTINUE" />
          </Link>
        </div>
      </div>
    </div>
  );
}
