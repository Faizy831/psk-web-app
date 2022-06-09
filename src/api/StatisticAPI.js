import { Statistic } from "../models";
import { DataStore } from "aws-amplify";
import ExerciseAPI from "./ExerciseAPI";
import PlayerAPI from "./PlayerAPI";



/**
 * Query a Player Statistics of specific TS
 */
// MIGUEL A FAZER
const getTSPlayerStatistic = async (playerID, trainingSessionID) => {
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Accuracy exercise
 */
const getTSPlayerStatisticAccuracy = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Accuracy")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Touches exercise
 */
 const getTSPlayerStatisticTouches = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Touches")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Shooting exercise
 */
 const getTSPlayerStatisticShooting = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Shooting")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of LongPassHand exercise
 */
 const getTSPlayerStatisticLongPassHand = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("LongPassHand")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of ShortPass exercise
 */
 const getTSPlayerStatisticShortPass = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("ShortPass")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Acceleration exercise
 */
 const getTSPlayerStatisticAcceleration = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Acceleration")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Agility exercise
 */
 const getTSPlayerStatisticAgility = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Agility")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of GoalKeeper exercise
 */
 const getTSPlayerStatisticGoalKeeper = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("GoalKeeper")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Dribble exercise
 */
 const getTSPlayerStatisticDribble = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Dribble")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Sides exercise
 */
 const getTSPlayerStatisticSides = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Sides")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Power exercise
 */
 const getTSPlayerStatisticPower = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Power")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of BiometricData
 */
 const getTSPlayerStatisticBiometricData = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("BiometricData")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of VerticalJump exercise
 */
 const getTSPlayerStatisticVerticalJump = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("VerticalJump")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Stamina exercise
 */
 const getTSPlayerStatisticStamina = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Stamina")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of LongPass exercise
 */
 const getTSPlayerStatisticLongPass = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("LongPass")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Speed exercise
 */
 const getTSPlayerStatisticSpeed = async (playerID, trainingSessionID) => {
    let exercise = await ExerciseAPI.getExerciseByName("Speed")
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.playerID === playerID && 
            statistic.trainingsessionID === trainingSessionID &&
            statistic.exerciseID === exercise[0].id &&
            statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query a Player Statistics of specific TS of Speed exercise
 */
 const getTSPlayerFinalScore = async (playerID, trainingSessionID) => {

    let position = await PlayerAPI.getPlayerPosition(playerID)
    let final_score_array
   
    //If player is GK
    if(position === "GK") { 
        //Speed, Acceleration, LongPass, ShortPass, Agility, LongPassHand, GoalKeeper
        array_aux=[await getTSPlayerStatisticSpeed(playerID, trainingSessionID), 
            await getTSPlayerStatisticAcceleration(playerID, trainingSessionID), 
            await getTSPlayerStatisticLongPass(playerID, trainingSessionID), 
            await getTSPlayerStatisticShortPass(playerID, trainingSessionID), 
            await getTSPlayerStatisticAgility(playerID, trainingSessionID), 
            await getTSPlayerStatisticLongPassHand(playerID, trainingSessionID), 
            await getTSPlayerStatisticGoalKeeper(playerID, trainingSessionID)]
        let final_score = 0.12*(array_aux[0]+array_aux[1])/2 + 0.13*array_aux[2] + 0.12*array_aux[3] + 0.2*array_aux[4] + 0.13*array_aux[5] + 0.3*array_aux[6]
        
        final_score_array = final_score
      }
      else {
        array_aux=[await getTSPlayerStatisticAgility(playerID, trainingSessionID), 
        await getTSPlayerStatisticAcceleration(playerID, trainingSessionID), 
        await getTSPlayerStatisticShooting(playerID, trainingSessionID), 
        await getTSPlayerStatisticDribble(playerID, trainingSessionID), 
        await getTSPlayerStatisticSpeed(playerID, trainingSessionID), 
        await getTSPlayerStatisticLongPass(playerID, trainingSessionID), 
        await getTSPlayerStatisticStamina(playerID, trainingSessionID), 
        await getTSPlayerStatisticShortPass(playerID, trainingSessionID)]

        //decrescente
        let array_sorted = array_aux.sort(function(a, b){return b - a});
        for (let m = 0; m < array_aux.length; m++) {
          sum = sum + array_aux[m]
        }
        let mean = sum/(array_aux.length)

        let final_score = array_sorted[0] + (array_sorted[0]+array_sorted[1]+array_sorted[2])/3 + mean + (array_sorted[2] + array_sorted[3] + array_sorted[4] + array_sorted[5])/4

        final_score_array = final_score
      }

      return final_score_array
}



/**
 * Query database for statistic
 */
const getStatistic = async (statisticID) => {
    try {
        //return DataStore.query(Statistic, statisticID);
        return (await DataStore.query(Statistic, statisticID)).filter(
            statistic => statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for statistic in training session
 */
const getTrainingSessionStatistics = async (trainingSessionID) => {
    try {
        return (await DataStore.query(Statistic)).filter(
            statistic => statistic.trainingsessionID === trainingSessionID && statistic.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}


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
    getTSPlayerStatistic : getTSPlayerStatistic,
}

export default StatisticAPI;