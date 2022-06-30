import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CoachMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoachesTrainingSessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubCoachMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StatisticMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScoreMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubPlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubTrainingSessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type KitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerTrainingSessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainingSessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMediaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Coach {
  readonly id: string;
  readonly Username?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Mobile?: string | null;
  readonly Email?: string | null;
  readonly Ranking?: number | null;
  readonly Deleted?: boolean | null;
  readonly CoachesTrainingSessions?: (CoachesTrainingSession | null)[] | null;
  readonly ClubCoaches?: (ClubCoach | null)[] | null;
  readonly Trainings?: (Training | null)[] | null;
  readonly Statistics?: (Statistic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Coach, CoachMetaData>);
  static copyOf(source: Coach, mutator: (draft: MutableModel<Coach, CoachMetaData>) => MutableModel<Coach, CoachMetaData> | void): Coach;
}

export declare class CoachesTrainingSession {
  readonly id: string;
  readonly Ranking?: number | null;
  readonly Deleted?: boolean | null;
  readonly coachID: string;
  readonly trainingsessionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CoachesTrainingSession, CoachesTrainingSessionMetaData>);
  static copyOf(source: CoachesTrainingSession, mutator: (draft: MutableModel<CoachesTrainingSession, CoachesTrainingSessionMetaData>) => MutableModel<CoachesTrainingSession, CoachesTrainingSessionMetaData> | void): CoachesTrainingSession;
}

export declare class ClubCoach {
  readonly id: string;
  readonly Deleted?: boolean | null;
  readonly coachID: string;
  readonly clubID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubCoach, ClubCoachMetaData>);
  static copyOf(source: ClubCoach, mutator: (draft: MutableModel<ClubCoach, ClubCoachMetaData>) => MutableModel<ClubCoach, ClubCoachMetaData> | void): ClubCoach;
}

export declare class Training {
  readonly id: string;
  readonly Mapping?: string | null;
  readonly Deleted?: boolean | null;
  readonly coachID: string;
  readonly exerciseID: string;
  readonly trainingsessionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Training, TrainingMetaData>);
  static copyOf(source: Training, mutator: (draft: MutableModel<Training, TrainingMetaData>) => MutableModel<Training, TrainingMetaData> | void): Training;
}

export declare class Statistic {
  readonly id: string;
  readonly Result?: (string | null)[] | null;
  readonly Deleted?: boolean | null;
  readonly Verified?: string | null;
  readonly coachID: string;
  readonly exerciseID: string;
  readonly trainingsessionID: string;
  readonly playerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Statistic, StatisticMetaData>);
  static copyOf(source: Statistic, mutator: (draft: MutableModel<Statistic, StatisticMetaData>) => MutableModel<Statistic, StatisticMetaData> | void): Statistic;
}

export declare class Exercise {
  readonly id: string;
  readonly Type?: string | null;
  readonly Table?: string | null;
  readonly Description?: string | null;
  readonly Name?: string | null;
  readonly Statistics?: (Statistic | null)[] | null;
  readonly Trainings?: (Training | null)[] | null;
  readonly Scores?: (Score | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Exercise, ExerciseMetaData>);
  static copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise, ExerciseMetaData>) => MutableModel<Exercise, ExerciseMetaData> | void): Exercise;
}

export declare class Score {
  readonly id: string;
  readonly Data?: (number | null)[] | null;
  readonly Table?: string | null;
  readonly Deleted?: boolean | null;
  readonly exerciseID: string;
  readonly trainingsessionID: string;
  readonly playerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Score, ScoreMetaData>);
  static copyOf(source: Score, mutator: (draft: MutableModel<Score, ScoreMetaData>) => MutableModel<Score, ScoreMetaData> | void): Score;
}

export declare class Club {
  readonly id: string;
  readonly Name?: string | null;
  readonly Country?: string | null;
  readonly Logo?: string | null;
  readonly ClubPlayers?: (ClubPlayer | null)[] | null;
  readonly ClubTrainingSessions?: (ClubTrainingSession | null)[] | null;
  readonly ClubCoaches?: (ClubCoach | null)[] | null;
  readonly Deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Club, ClubMetaData>);
  static copyOf(source: Club, mutator: (draft: MutableModel<Club, ClubMetaData>) => MutableModel<Club, ClubMetaData> | void): Club;
}

export declare class ClubPlayer {
  readonly id: string;
  readonly Deleted?: boolean | null;
  readonly clubID: string;
  readonly playerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubPlayer, ClubPlayerMetaData>);
  static copyOf(source: ClubPlayer, mutator: (draft: MutableModel<ClubPlayer, ClubPlayerMetaData>) => MutableModel<ClubPlayer, ClubPlayerMetaData> | void): ClubPlayer;
}

export declare class ClubTrainingSession {
  readonly id: string;
  readonly Deleted?: boolean | null;
  readonly clubID: string;
  readonly trainingsessionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubTrainingSession, ClubTrainingSessionMetaData>);
  static copyOf(source: ClubTrainingSession, mutator: (draft: MutableModel<ClubTrainingSession, ClubTrainingSessionMetaData>) => MutableModel<ClubTrainingSession, ClubTrainingSessionMetaData> | void): ClubTrainingSession;
}

export declare class Kit {
  readonly id: string;
  readonly Tag?: string | null;
  readonly PlayerTrainingSessions?: (PlayerTrainingSession | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Kit, KitMetaData>);
  static copyOf(source: Kit, mutator: (draft: MutableModel<Kit, KitMetaData>) => MutableModel<Kit, KitMetaData> | void): Kit;
}

export declare class PlayerTrainingSession {
  readonly id: string;
  readonly GroupNumber?: string | null;
  readonly Deleted?: boolean | null;
  readonly kitID: string;
  readonly trainingsessionID: string;
  readonly playerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PlayerTrainingSession, PlayerTrainingSessionMetaData>);
  static copyOf(source: PlayerTrainingSession, mutator: (draft: MutableModel<PlayerTrainingSession, PlayerTrainingSessionMetaData>) => MutableModel<PlayerTrainingSession, PlayerTrainingSessionMetaData> | void): PlayerTrainingSession;
}

export declare class TrainingSession {
  readonly id: string;
  readonly Type?: string | null;
  readonly StartDate?: string | null;
  readonly EndDate?: string | null;
  readonly Location?: string | null;
  readonly Table?: string | null;
  readonly Field?: string | null;
  readonly FinalScores?: string | null;
  readonly CoachTable?: string | null;
  readonly Deleted?: boolean | null;
  readonly CoachesTrainingSessions?: (CoachesTrainingSession | null)[] | null;
  readonly PlayerTrainingSessions?: (PlayerTrainingSession | null)[] | null;
  readonly ClubTrainingSessions?: (ClubTrainingSession | null)[] | null;
  readonly Scores?: (Score | null)[] | null;
  readonly PlayerMedias?: (PlayerMedia | null)[] | null;
  readonly Trainings?: (Training | null)[] | null;
  readonly Statistics?: (Statistic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TrainingSession, TrainingSessionMetaData>);
  static copyOf(source: TrainingSession, mutator: (draft: MutableModel<TrainingSession, TrainingSessionMetaData>) => MutableModel<TrainingSession, TrainingSessionMetaData> | void): TrainingSession;
}

export declare class PlayerMedia {
  readonly id: string;
  readonly Deleted?: boolean | null;
  readonly Photos?: (string | null)[] | null;
  readonly Dashboard?: (string | null)[] | null;
  readonly Videos?: (string | null)[] | null;
  readonly Cloudinary?: string | null;
  readonly Card?: (string | null)[] | null;
  readonly trainingsessionID: string;
  readonly playerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PlayerMedia, PlayerMediaMetaData>);
  static copyOf(source: PlayerMedia, mutator: (draft: MutableModel<PlayerMedia, PlayerMediaMetaData>) => MutableModel<PlayerMedia, PlayerMediaMetaData> | void): PlayerMedia;
}

export declare class Player {
  readonly id: string;
  readonly Username?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly IDCard?: string | null;
  readonly Gender?: string | null;
  readonly BirthDate?: string | null;
  readonly Nationality?: string | null;
  readonly Position?: string | null;
  readonly StrongFoot?: string | null;
  readonly Deleted?: boolean | null;
  readonly PlayerTrainingSessions?: (PlayerTrainingSession | null)[] | null;
  readonly ClubPlayers?: (ClubPlayer | null)[] | null;
  readonly Scores?: (Score | null)[] | null;
  readonly PlayerMedias?: (PlayerMedia | null)[] | null;
  readonly Statistics?: (Statistic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}