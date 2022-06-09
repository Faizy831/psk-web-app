import { Score } from "../models";
import { DataStore } from "aws-amplify";
import ExerciseAPI from "./ExerciseAPI";


  

/**
 * Query database for datas
 */
const getDatas = async() => {
    try {
        return (await DataStore.query(Score));
    } catch (error) {
        console.log(error);
    }
}

const getTrainingSessionData = async (trainingSessionID) => {
    try {
        return (await DataStore.query(Score)).filter(
            data => data.trainingsessionID === trainingSessionID
        );
    } catch (error) {
        console.log(error);
    }
}


/* Returns all the scores of a player from a TS */

const getPlayerTrainingSessionData = async (playerID,trainingSessionID) => {
    try {
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID
        );
    } catch (error) {
        console.log(error);
    }
}

const getPlayerTrainingSessionDataByExercise = async (playerID,trainingSessionID,exerciseID) => {
    try {
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exerciseID
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Accuracy exercise
 */
const getPlayerTrainingSessionAccuracyData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Accuracy")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Touches exercise
 */
 const getPlayerTrainingSessionTouchesData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Touches")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Shooting exercise
 */
 const getPlayerTrainingSessionShootingData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Shooting")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to LongPassHand exercise
 */
 const getPlayerTrainingSessionLongPassHandData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("LongPassHand")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to ShortPass exercise
 */
 const getPlayerTrainingSessionShortPassData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("ShortPass")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Acceleration exercise
 */
 const getPlayerTrainingSessionAccelerationData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Acceleration")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Agility exercise
 */
 const getPlayerTrainingSessionAgilityData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Agility")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to GoalKeeper exercise
 */
 const getPlayerTrainingSessionGoalKeeperData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("GoalKeeper")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Dribble exercise
 */
 const getPlayerTrainingSessionDribbleData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Dribble")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Sides exercise
 */
 const getPlayerTrainingSessionSidesData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Sides")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Power exercise
 */
 const getPlayerTrainingSessionPowerData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Power")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to BiometricData 
 */
 const getPlayerTrainingSessionBiometricData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("BiometricData")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to VerticalJump exercise
 */
 const getPlayerTrainingSessionVerticalJumpData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("VerticalJump")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Stamina exercise
 */
 const getPlayerTrainingSessionStaminaData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Stamina")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Touches exercise
 */
 const getPlayerTrainingSessionLongPassData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("LongPass")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for data that corresponds to Speed exercise
 */
 const getPlayerTrainingSessionSpeedData = async (playerID,trainingSessionID) => {
    try {
        let exercise = await ExerciseAPI.getExerciseByName("Speed")
        return (await DataStore.query(Score)).filter(
            data => 
            data.trainingsessionID === trainingSessionID &&
            data.playerID === playerID &&
            data.exerciseID === exercise[0].id
        );
    } catch (error) {
        console.log(error);
    }
}


/**
 * Query database for data that corresponds to statistic
 */
const getStatisticData = async (statistic) => {
    try {
        return (await DataStore.query(Score)).filter(
            data =>
                data.trainingsessionID === statistic.trainingsessionID &&
                data.playerID === statistic.playerID &&
                data.exerciseID === statistic.exerciseID
        );
    } catch (error) {
        console.log(error);
    }
}

const getData = async (dataID) => {
    try {
        return (await DataStore.query(Score)).filter(
            data => data.id === dataID && data.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}


const DataAPI = {
    getDatas: getDatas,
    getTrainingSessionData: getTrainingSessionData,
    getStatisticData: getStatisticData,
    getPlayerTrainingSessionData: getPlayerTrainingSessionData,
    getPlayerTrainingSessionDataByExercise: getPlayerTrainingSessionDataByExercise,
    getPlayerTrainingSessionAccuracyData: getPlayerTrainingSessionAccuracyData,
    getPlayerTrainingSessionTouchesData: getPlayerTrainingSessionTouchesData,
    getPlayerTrainingSessionShootingData: getPlayerTrainingSessionShootingData,
    getPlayerTrainingSessionLongPassHandData: getPlayerTrainingSessionLongPassHandData,
    getPlayerTrainingSessionShortPassData: getPlayerTrainingSessionShortPassData,
    getPlayerTrainingSessionAccelerationData: getPlayerTrainingSessionAccelerationData,
    getPlayerTrainingSessionAgilityData: getPlayerTrainingSessionAgilityData,
    getPlayerTrainingSessionGoalKeeperData: getPlayerTrainingSessionGoalKeeperData,
    getPlayerTrainingSessionDribbleData: getPlayerTrainingSessionDribbleData,
    getPlayerTrainingSessionSidesData: getPlayerTrainingSessionSidesData,
    getPlayerTrainingSessionPowerData: getPlayerTrainingSessionPowerData,
    getPlayerTrainingSessionBiometricData: getPlayerTrainingSessionBiometricData,
    getPlayerTrainingSessionVerticalJumpData: getPlayerTrainingSessionVerticalJumpData,
    getPlayerTrainingSessionStaminaData: getPlayerTrainingSessionStaminaData,
    getPlayerTrainingSessionLongPassData: getPlayerTrainingSessionLongPassData,
    getPlayerTrainingSessionSpeedData: getPlayerTrainingSessionSpeedData,
    getData: getData,
}

export default DataAPI;