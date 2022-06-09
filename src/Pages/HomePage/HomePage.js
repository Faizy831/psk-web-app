import React from "react";
import UserProfile from "../../Components/UserProfile/UserProfile";
import UserCalculations from "../../Components/UserCalculations/UserCalculations";
import UserPositions from "../../Components/UserPositions/UserPositions";
import UserPerfomance from "../../Components/UserPerfomance/UserPerfomance";
import UserLongPassGkReaction from "../../Components/UserLongPassGkReaction/UserLongPassGkReaction";
import UserAgilityAndDribble from "../../Components/UserAgility&Dribble/UserAgility&Dribble";
import Footer from "../../Components/Footer/Footer";
import { useStyles } from "./HomeStyle";

import DataAPI from "../../api/DataAPI";
import ExerciseAPI from "../../api/ExerciseAPI";
import PlayerAPI from "../../api/PlayerAPI";
import PlayerTrainingSessionAPI from "../../api/PlayerTrainingSessionAPI";
import StatisticAPI from "../../api/StatisticAPI";

import { Amplify, DataStore } from "aws-amplify";
import awsconfig from "./aws-exports";
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';

/**
 * Initial configuration of AWS Amplify
 */
 const configureAmplify = () => {
    timeout = setTimeout(setShowLoading(false), 5000);
    try {
      Amplify.configure(awsconfig);
      console.log("Amplify configured!");
      //DataStore.clear();
    } catch (error) {
      console.log("Error configuring Amplify\n" + error);
    }
  }
  
  configureAmplify();
  DataStore.start();


const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainContianer}>
      <UserProfile />
      <UserCalculations />
      <UserPositions />
      <UserPerfomance />
      <UserAgilityAndDribble />
      <UserLongPassGkReaction />
      <Footer />
    </div>
  );
};

export default HomePage;
