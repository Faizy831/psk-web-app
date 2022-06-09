import { Exercise } from "../models";
import { DataStore } from "aws-amplify";
import DataAPI from '../api/DataAPI';

/**
 * Query database for exercises
 */
const getExercises = () => {
    try {
        return DataStore.query(Exercise);
    } catch (error) {
        console.log(error);
    }
}

//List of exercises without TeamLeader, Power and Accuracy
const getExercise2 = async () => {
    const exercises = (await getExercises()).filter(
        (exercise) => exercise.Name !== "teamleader" && exercise.Name !== "Power" && exercise.Name !== "Accuracy"
    )  
    
    return exercises
}

/**
 * Query database for exercise
 */
const getExercise = (exerciseID) => {
    try {
        return DataStore.query(Exercise, exerciseID);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Query database for exercise with specific name
 */
const getExerciseByName = async (exerciseName) => {

    const exercises = (await getExercises()).filter(
        (exercise) => exercise.Name === exerciseName
    )

    return exercises
}

/**
 * Query database for exercise with specific type
 */
 const getExerciseByType = async (exerciseType) => {

    const exercises = (await getExercises()).filter(
        (exercise) => (exercise.Type === exerciseType)
    )

    return exercises
}



const ExerciseAPI = {
    getExercises: getExercises,
    getExercise: getExercise,
    getExerciseByName: getExerciseByName,
    getExerciseByType: getExerciseByType,
    getExercise2: getExercise2
}

export default ExerciseAPI;