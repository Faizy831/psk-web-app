import React, { useState, useEffect, useMemo } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { useStyles } from "./TrainingSessionDropDownStyle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "../LoginForm/Btn";
import { useLocation } from "react-router-dom";
import PlayerTrainingSessionAPI from "../../api/PlayerTrainingSessionAPI";
import TraningSessionAPI from "../../api/TraningSessionAPI";
import { useNavigate } from "react-router-dom";

export default function CustomizedInputs({
  trainingSessionID,
  setTrainingSessionID,
  setTsID,
}) {
  const classes = useStyles();

  const location = useLocation();

  const [playerID, SetPlayerID] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    SetPlayerID(location.state.id);
  }, [location.state.id]);

  const [SingleTrainingSession, SetSingleTrainingSession] = useState([]);
  const [DropDownValue, SetDropDownValue] = useState("");

  const SingleTrainingSessionOfPlayer = async () => {
    const SingleTrainingSessionOfPlayer =
      await TraningSessionAPI.getTrainingSession(trainingSessionID);
    console.log(SingleTrainingSessionOfPlayer, "SingleTrainingSessionOfPlayer");
    const Array = [];
    Array.push({ title: SingleTrainingSessionOfPlayer?.Type });
    SetSingleTrainingSession(Array);
  };

  const TraningSessionsOfPlayer = async () => {
    const TraningSessionsOfPlayer =
      await PlayerTrainingSessionAPI.getPlayerTrainingSessionFromPlayer(
        playerID
      );
    TraningSessionsOfPlayer.map((value) => {
      setTrainingSessionID(value.trainingsessionID);
    });
  };

  const Contiune = () => {
    Navigate("/Dashboard", { state: { id: playerID } });
  };

  useEffect(() => {
    SingleTrainingSessionOfPlayer();
    TraningSessionsOfPlayer();
  }, [trainingSessionID, playerID]);

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
            options={SingleTrainingSession}
            getOptionLabel={(option) => option.title || ""}
            className={classes.DropDown}
            hiddenLabel="true"
            value={SingleTrainingSession[DropDownValue]}
            onChange={(event, value) => {
              SetDropDownValue(value.title);
            }}
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
          <Button title="CONTINUE" onClick={Contiune} />
        </div>
      </div>
    </div>
  );
}
