// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Coach, CoachesTrainingSession, ClubCoach, Training, Statistic, Exercise, Score, Club, ClubPlayer, ClubTrainingSession, Kit, PlayerTrainingSession, TrainingSession, PlayerMedia, Player } = initSchema(schema);

export {
  Coach,
  CoachesTrainingSession,
  ClubCoach,
  Training,
  Statistic,
  Exercise,
  Score,
  Club,
  ClubPlayer,
  ClubTrainingSession,
  Kit,
  PlayerTrainingSession,
  TrainingSession,
  PlayerMedia,
  Player
};