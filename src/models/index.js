// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Player, PlayerTrainingSession, ClubPlayer, Score, PlayerMedia, Statistic, CoachesTrainingSession, TrainingSession, ClubTrainingSession, Training, Kit, Club, ClubCoach, Exercise, Coach } = initSchema(schema);

export {
  Player,
  PlayerTrainingSession,
  ClubPlayer,
  Score,
  PlayerMedia,
  Statistic,
  CoachesTrainingSession,
  TrainingSession,
  ClubTrainingSession,
  Training,
  Kit,
  Club,
  ClubCoach,
  Exercise,
  Coach
};