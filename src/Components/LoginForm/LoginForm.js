import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from "./LoginFormStyle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "./Btn";
import { Link } from "react-router-dom";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiFormLabel-root": {
      display: "none",
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: 400,
    height: 30,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    ["@media (max-width: 453px)"]: {
      width: 300,
    },
  },
}))(InputBase);

const top100Films = [
  { title: "Pakistan" },
  { title: "UK" },
  { title: "England" },
];

const LoginForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.LoginContainer}>
      <form className={classes.root} noValidate>
        <div className={classes.IdCardWrapper}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={classes.InputLable}
          >
            ID CARD
          </InputLabel>
          <FormControl>
            <BootstrapInput
              placeholder="ID CARD"
              id="bootstrap-input"
              type="number"
            />
          </FormControl>
        </div>
        <div className={classes.DropDownContianer}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={classes.DropDownLable}
          >
            NATIONALITY
          </InputLabel>
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            className={classes.DropDown}
            hiddenLabel="true"
            renderInput={(params) => (
              <TextField
                placeholder="NATIONALITY"
                {...params}
                variant="outlined"
              />
            )}
          />
        </div>
        <div className={classes.ButtonWrapper}>
          <Link to="/TraningSession">
            <Button title="Login" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
