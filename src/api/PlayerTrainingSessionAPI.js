import { PlayerTrainingSession } from "../models";
import { DataStore } from "aws-amplify";
import PlayerAPI from "./PlayerAPI";

/**
 * Query database for training session's player training sessions
 */
const getPlayerTrainingSession = async (playerID, trainingSessionID) => {
  try {
    return (await DataStore.query(PlayerTrainingSession)).filter((playerTS) => {
      return (
        playerTS.trainingsessionID === trainingSessionID &&
        playerTS.playerID === playerID &&
        playerTS.Deleted == false
      );
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for training session's player training sessions
 */
const getPlayerTrainingSessionByID = async (playertsID) => {
  try {
    return await DataStore.query(PlayerTrainingSession, playertsID);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for training session's player training sessions
 */
const getPlayerTrainingSessionFromPlayer = async (playerID) => {
  try {
    return (await DataStore.query(PlayerTrainingSession)).filter(
      (playerTS) => playerTS.playerID === playerID && playerTS.Deleted == false
    );
  } catch (error) {
    console.log(error);
  }
};

const getPlayerTrainingSessionFromTS = async (tsID) => {
  // console.log(tsID, "tsID");
  try {
    return (await DataStore.query(PlayerTrainingSession)).filter(
      (playerTS) =>
        playerTS.trainingsessionID === tsID && playerTS.Deleted == false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for training session's player training sessions
 */
const getTrainingSessionPlayerTrainingSessions = async (tsID) => {
  try {
    /* let teste = (await DataStore.query(PlayerTrainingSession))
        let filter = teste.filter(
            (playerTS) => (playerTS.trainingsessionID === tsID)
        )

        console.log(teste)*/
    return (await DataStore.query(PlayerTrainingSession)).filter(
      (playerTS) =>
        playerTS.trainingsessionID === tsID && playerTS.Deleted == false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query for all playernames in a ts
 */
const getPlayerNames = async (trainingSessionID) => {
  //let names=[]
  try {
    const playerid = await getTrainingSessionPlayerTrainingSessions(
      trainingSessionID
    );
    let names = [];
    for (const i of playerid) {
      const aux = await PlayerAPI.getPlayerName(i.playerID);
      //names.push(names)
      names.push(aux);
    }
    return names;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for training session's player training sessions by kit
 */
const getPlayerTrainingSessionsByTSandKitID = async (
  trainingSessionID,
  kitID
) => {
  try {
    return (await DataStore.query(PlayerTrainingSession)).filter(
      (playerTS) =>
        playerTS.trainingsessionID === trainingSessionID &&
        playerTS.kitID === kitID
    );
  } catch (error) {
    console.log(error);
  }
};

const PlayerTrainingSessionAPI = {
  getPlayerNames: getPlayerNames,
  getPlayerTrainingSessionByID: getPlayerTrainingSessionByID,
  getPlayerTrainingSession: getPlayerTrainingSession,
  getTrainingSessionPlayerTrainingSessions:
    getTrainingSessionPlayerTrainingSessions,
  getPlayerTrainingSessionsByTSandKitID: getPlayerTrainingSessionsByTSandKitID,
  getPlayerTrainingSession: getPlayerTrainingSession,
  getPlayerTrainingSessionFromPlayer: getPlayerTrainingSessionFromPlayer,
  getPlayerTrainingSessionFromTS: getPlayerTrainingSessionFromTS,
};

export default PlayerTrainingSessionAPI;
