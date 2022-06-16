import { CoachesTrainingSession, TrainingSession } from "../models";
import { DataStore } from "aws-amplify";

/**
 * Query database for training session
 */
 const getTrainingSession = async (trainingSessionID) => {
    try {
        return (await DataStore.query(TrainingSession, trainingSessionID));
    } catch (error) {
        console.log(error);
    }
}


/**
 * Query database for training sessions *-*
 */
const getTrainingSessions = async () => {
    try {
        return (await DataStore.query(TrainingSession)).filter(
            (TS) => TS.Deleted === false
        );
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for user's training sessions
 */
const getUserTrainingSessions = (userID) => {
    try {
        return DataStore.query(TrainingSession);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Add training session to database
 */
const addTrainingSession = (trainingSession) => {
    try {
        trainingSession.Deleted = false
        DataStore.save(new TrainingSession(trainingSession));
    } catch (error) {
        console.log(error);
    }
}


/*
Get TrainingSession date
*/
const getTrainingSessionDate = async (trainingSessionID) => {
   try {
        const date = await DataStore.query(TrainingSession, trainingSessionID);
        return date.StartDate
    } catch (error) {
        console.log(error);
    } 
}



/**
 * Update training session
 */
const updateTrainingSession = async (TS, newParameters) => {
    console.log("item dentro do update: ", TS);
    console.log("itemCopy dentro do update: ", newParameters);
    const TS1 = await getTrainingSession(TS.id);

    try {
        DataStore.save(TrainingSession.copyOf(TS1, newTS => {
            newTS.Type = newParameters.Type;
            newTS.StartDate = newParameters.StartDate;
            newTS.EndDate = newParameters.EndDate;
            newTS.Location = newParameters.Location;
            newTS.Field = newParameters.Field;
            newTS.Deleted = false;
        }));
    } catch (error) {
        console.log(error);
    }
}

/**
 * Delete TS from database
 */
 const deleteTS = async (TSID) => {
    try {
        const TS = await getTrainingSession(TSID);
        DataStore.save(TrainingSession.copyOf(TS, removedTS =>{
            removedTS.Deleted = true;
        }));
    } catch (error) {
        console.log(error);
    }
}


const TrainingSessionAPI = {
    getTrainingSession: getTrainingSession,
    getTrainingSessions: getTrainingSessions,
    getUserTrainingSessions: getUserTrainingSessions,
    addTrainingSession: addTrainingSession,
    getTrainingSessionDate: getTrainingSessionDate,
    updateTrainingSession: updateTrainingSession,
    deleteTS: deleteTS
}

export default TrainingSessionAPI;