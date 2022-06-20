import React, { useState, useEffect, useMemo } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { useStyles } from "./TrainingSessionDropDownStyle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "../LoginForm/Btn";
import { useLocation, Link } from "react-router-dom";
import TraningSessionAPI from "../../api/TraningSessionAPI";
import StatisticAPI from "../../api/StatisticAPI";
// import PlayerTrainingSessionAPI from "../../api/PlayerTrainingSessionAPI";

export default function CustomizedInputs() {
  const classes = useStyles();

  const location = useLocation();

  useEffect(() => {
    SetPlayerID(location.state.id);
    TraningSessions();
  }, []);

  const [getTrainingSessions, SetGetTrainingSessions] = useState([]);
  const [playerID, SetPlayerID] = useState("");
  const [trainingSessionID, setTrainingSessionID] = useState("");
  // const [tsID, setTsID] = useState("");

  const PlayerStatistic = async () => {
    const PlayerStatisticData = await StatisticAPI.getTSPlayerStatistic(
      playerID,
      trainingSessionID
    );
    // console.log(PlayerStatisticData, "PlayerStatisticData");
  };

  // const PlayerTrainingSession = async () => {
  //   const PlayerTrainingSessionData =
  //     await PlayerTrainingSessionAPI.getPlayerTrainingSessionFromTS(tsID);
  //   PlayerTrainingSessionData.map((value) => {
  //     SetPlayerID(value.playerID);
  //     setTrainingSessionID(value.trainingsessionID);
  //   });
  // };

  const TraningSessions = async () => {
    const TraningSessionsData = await TraningSessionAPI.getTrainingSessions();
    SetGetTrainingSessions(TraningSessionsData);
    TraningSessionsData.map((type) => {
      top100Films.push({ title: type.Type, id: type.id });
    });
  };

  useEffect(() => {
    PlayerStatistic();
    // PlayerTrainingSession();
  }, [playerID, trainingSessionID]);

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
            getOptionLabel={(option) => option.title || ""}
            className={classes.DropDown}
            hiddenLabel="true"
            value={top100Films}
            onChange={(event, value) => {
              setTrainingSessionID(value.id);
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
          <Link to="/Dashboard" className={classes.Link}>
            <Button title="CONTINUE" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const top100Films = [];
