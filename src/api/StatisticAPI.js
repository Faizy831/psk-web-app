import { Statistic } from "../models";
import { DataStore } from "aws-amplify";
import ExerciseAPI from "./ExerciseAPI";
import PlayerAPI from "./PlayerAPI";
import DataAPI from "./DataAPI";

/**
 * Query a Player Statistics of specific TS
 */
// MIGUEL A FAZER
const getTSPlayerStatistic = async (playerID, trainingSessionID) => {
  try {
    return (await DataStore.query(Statistic)).filter((statistic) => {
      return (
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.Deleted === false
      );
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Accuracy exercise
 */
const getTSPlayerStatisticAccuracy = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Accuracy");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Touches exercise
 */
const getTSPlayerStatisticTouches = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Touches");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Shooting exercise
 */
const getTSPlayerStatisticShooting = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Shooting");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of LongPassHand exercise
 */
const getTSPlayerStatisticLongPassHand = async (
  playerID,
  trainingSessionID
) => {
  let exercise = await ExerciseAPI.getExerciseByName("LongPassHand");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of ShortPass exercise
 */
const getTSPlayerStatisticShortPass = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("ShortPass");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Acceleration exercise
 */
const getTSPlayerStatisticAcceleration = async (
  playerID,
  trainingSessionID
) => {
  let exercise = await ExerciseAPI.getExerciseByName("Acceleration");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Agility exercise
 */
const getTSPlayerStatisticAgility = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Agility");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of GoalKeeper exercise
 */
const getTSPlayerStatisticGoalKeeper = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("GoalKeeper");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Dribble exercise
 */
const getTSPlayerStatisticDribble = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Dribble");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Sides exercise
 */
const getTSPlayerStatisticSides = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Sides");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Power exercise
 */
const getTSPlayerStatisticPower = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Power");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of BiometricData
 */
const getTSPlayerStatisticBiometricData = async (
  playerID,
  trainingSessionID
) => {
  let exercise = await ExerciseAPI.getExerciseByName("BiometricData");
  try {
    return (await DataStore.query(Statistic)).filter((statistic) => {
      return (
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
      );
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of VerticalJump exercise
 */
const getTSPlayerStatisticVerticalJump = async (
  playerID,
  trainingSessionID
) => {
  let exercise = await ExerciseAPI.getExerciseByName("VerticalJump");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Stamina exercise
 */
const getTSPlayerStatisticStamina = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Stamina");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of LongPass exercise
 */
const getTSPlayerStatisticLongPass = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("LongPass");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Speed exercise
 */
const getTSPlayerStatisticSpeed = async (playerID, trainingSessionID) => {
  let exercise = await ExerciseAPI.getExerciseByName("Speed");
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.playerID === playerID &&
        statistic.trainingsessionID === trainingSessionID &&
        statistic.exerciseID === exercise[0].id &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query a Player Statistics of specific TS of Speed exercise
 */
const getTSPlayerFinalScore = async (playerID, trainingSessionID) => {
  let position = await PlayerAPI.getPlayerPosition(playerID);
  let final_score_array;
  let array_aux = [];
  //If player is GK
  if (position === "GK") {
    //Speed, Acceleration, LongPass, ShortPass, Agility, LongPassHand, GoalKeeper
    let Speed = await DataAPI.getPlayerTrainingSessionSpeedData(
      playerID,
      trainingSessionID
    );
    let Acceleration = await DataAPI.getPlayerTrainingSessionAccelerationData(
      playerID,
      trainingSessionID
    );
    let LongPass = await DataAPI.getPlayerTrainingSessionLongPassData(
      playerID,
      trainingSessionID
    );
    let ShortPass = await DataAPI.getPlayerTrainingSessionShortPassData(
      playerID,
      trainingSessionID
    );
    let Agility = await DataAPI.getPlayerTrainingSessionAgilityData(
      playerID,
      trainingSessionID
    );
    let LongPassHand = await DataAPI.getPlayerTrainingSessionLongPassHandData(
      playerID,
      trainingSessionID
    );
    let GoalKeeper = await DataAPI.getPlayerTrainingSessionGoalKeeperData(
      playerID,
      trainingSessionID
    );
    if (Speed.length === 0) {
      Speed[0] = { Data: [0] };
    }
    if (Acceleration.length === 0) {
      Acceleration[0] = { Data: [0] };
    }
    if (LongPass.length === 0) {
      LongPass[0] = { Data: [0] };
    }
    if (ShortPass.length === 0) {
      ShortPass[0] = { Data: [0] };
    }
    if (Agility.length === 0) {
      Agility[0] = { Data: [0] };
    }
    if (LongPassHand.length === 0) {
      LongPassHand[0] = { Data: [0] };
    }
    if (GoalKeeper.length === 0) {
      GoalKeeper[0] = { Data: [0] };
    }
    array_aux = [
      Speed[0].Data,
      Acceleration[0].Data,
      LongPass[0].Data,
      ShortPass[0].Data,
      Agility[0].Data,
      LongPassHand[0].Data,
      GoalKeeper[0].Data,
    ];
    let final_score =
      (0.12 * (parseFloat(array_aux[0]) + parseFloat(array_aux[1]))) / 2 +
      0.13 * parseFloat(array_aux[2]) +
      0.12 * parseFloat(array_aux[3]) +
      0.2 * parseFloat(array_aux[4]) +
      0.13 * parseFloat(array_aux[5]) +
      0.3 * parseFloat(array_aux[6]);
    final_score_array = final_score;
  } else {
    let Agility = await DataAPI.getPlayerTrainingSessionAgilityData(
      playerID,
      trainingSessionID
    );
    let Acceleration = await DataAPI.getPlayerTrainingSessionAccelerationData(
      playerID,
      trainingSessionID
    );
    let Shooting = await DataAPI.getPlayerTrainingSessionShootingData(
      playerID,
      trainingSessionID
    );
    let Dribble = await DataAPI.getPlayerTrainingSessionDribbleData(
      playerID,
      trainingSessionID
    );
    let Speed = await DataAPI.getPlayerTrainingSessionSpeedData(
      playerID,
      trainingSessionID
    );
    let LongPass = await DataAPI.getPlayerTrainingSessionLongPassData(
      playerID,
      trainingSessionID
    );
    let Stamina = await DataAPI.getPlayerTrainingSessionStaminaData(
      playerID,
      trainingSessionID
    );
    let ShortPass = await DataAPI.getPlayerTrainingSessionShortPassData(
      playerID,
      trainingSessionID
    );
    if (Agility.length === 0) {
      Agility[0] = { Data: [0] };
    }
    if (Acceleration.length === 0) {
      Acceleration[0] = { Data: [0] };
    }
    if (Shooting.length === 0) {
      Shooting[0] = { Data: [0] };
    }
    if (Dribble.length === 0) {
      Dribble[0] = { Data: [0] };
    }
    if (Speed.length === 0) {
      Speed[0] = { Data: [0] };
    }
    if (LongPass.length === 0) {
      LongPass[0] = { Data: [0] };
    }
    if (Stamina.length === 0) {
      Stamina[0] = { Data: [0] };
    }
    if (ShortPass.length === 0) {
      ShortPass[0] = { Data: [0] };
    }
    array_aux = [
      Agility[0].Data,
      Acceleration[0].Data,
      Shooting[0].Data,
      Dribble[0].Data,
      Speed[0].Data,
      LongPass[0].Data,
      Stamina[0].Data,
      ShortPass[0].Data,
    ];
    //decrescent
    let array_sorted = array_aux.sort(function (a, b) {
      return b - a;
    });
    let sum = 0;
    for (let m = 0; m < array_aux.length; m++) {
      sum = sum + parseFloat(array_aux[m]);
    }
    let mean = sum / array_aux.length;
    let final_score =
      (parseFloat(array_sorted[0]) +
        (parseFloat(array_sorted[0]) +
          parseFloat(array_sorted[1]) +
          parseFloat(array_sorted[2])) /
          3 +
        mean +
        (parseFloat(array_sorted[2]) +
          parseFloat(array_sorted[3]) +
          parseFloat(array_sorted[4]) +
          parseFloat(array_sorted[5])) /
          4) /
      4;
    let final_score_string = final_score.toString();
    final_score_array = final_score_string[0] + final_score_string[1];
  }
  return final_score_array;
};

/**
 * Query database for statistic
 */
const getStatistic = async (statisticID) => {
  try {
    //return DataStore.query(Statistic, statisticID);
    return (await DataStore.query(Statistic, statisticID)).filter(
      (statistic) => statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for statistic in training session
 */
const getTrainingSessionStatistics = async (trainingSessionID) => {
  try {
    return (await DataStore.query(Statistic)).filter(
      (statistic) =>
        statistic.trainingsessionID === trainingSessionID &&
        statistic.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

const StatisticAPI = {
  getStatistic: getStatistic,
  getTSPlayerStatisticAccuracy: getTSPlayerStatisticAccuracy,
  getTSPlayerStatisticTouches: getTSPlayerStatisticTouches,
  getTSPlayerStatisticShooting: getTSPlayerStatisticShooting,
  getTSPlayerStatisticLongPassHand: getTSPlayerStatisticLongPassHand,
  getTSPlayerStatisticShortPass: getTSPlayerStatisticShortPass,
  getTSPlayerStatisticAcceleration: getTSPlayerStatisticAcceleration,
  getTSPlayerStatisticAgility: getTSPlayerStatisticAgility,
  getTSPlayerStatisticGoalKeeper: getTSPlayerStatisticGoalKeeper,
  getTSPlayerStatisticDribble: getTSPlayerStatisticDribble,
  getTSPlayerStatisticSides: getTSPlayerStatisticSides,
  getTSPlayerStatisticPower: getTSPlayerStatisticPower,
  getTSPlayerStatisticBiometricData: getTSPlayerStatisticBiometricData,
  getTSPlayerStatisticVerticalJump: getTSPlayerStatisticVerticalJump,
  getTSPlayerStatisticStamina: getTSPlayerStatisticStamina,
  getTSPlayerStatisticLongPass: getTSPlayerStatisticLongPass,
  getTSPlayerStatisticSpeed: getTSPlayerStatisticSpeed,
  getTrainingSessionStatistics: getTrainingSessionStatistics,
  getTSPlayerFinalScore: getTSPlayerFinalScore,
  getTSPlayerStatistic: getTSPlayerStatistic,
};

export default StatisticAPI;
