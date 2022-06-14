import { Player } from "../models";
import { DataStore } from "aws-amplify";
import PlayerTrainingSessionAPI from "./PlayerTrainingSessionAPI";

/**
 * Query database for player
 */
const getPlayer = async (playerID) => {
  try {
    return await DataStore.query(Player, playerID);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player name with specific playerID
 */
const getPlayerName = async (playerID) => {
  console.log("WAHT IS HER ",playerID)
  try {
    const player = await DataStore.query(Player, playerID);
    return player.FirstName + " " + player.LastName;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player age with specific playerID
 */
const getPlayerAge = async (playerID) => {
  try {
    const player = await DataStore.query(Player, playerID);
    return player.BirthDate;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player position with specific playerID
 */
const getPlayerPosition = async (playerID) => {
  try {
    const player = await DataStore.query(Player, playerID);
    return player.Position;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player nationality
 */
const getPlayerNationality = async (playerID) => {
  try {
    const player = await DataStore.query(Player, playerID);
    return player.Nationality;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player IDcard
 */
const getPlayerIDcard = async (playerID) => {
  try {
    const player = await DataStore.query(Player, playerID);
    console.log(player, "what is here");
    return player.IDCard;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for players *-*
 */
const getPlayers = async () => {
  try {
    return (await DataStore.query(Player)).filter(
      (Players) => Players.Deleted === false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for players in training session
 */
const getTrainingSessionPlayers = async (trainingSessionID) => {
  const notIn = (items, itemToAdd) => {
    for (const item of items) {
      if (item.id === itemToAdd?.id) {
        return false;
      }
    }
    return true;
  };

  try {
    const playerTrainingSessions =
      await PlayerTrainingSessionAPI.getPlayerTrainingSessionFromTS(
        trainingSessionID
      );
    console.log(playerTrainingSessions);
    let players = [];
    let player = null;
    for await (const playerTS of playerTrainingSessions) {
      player = await getPlayer(playerTS.playerID);
      if (
        player === null ||
        !notIn(players, player) ||
        player.Deleted == true
      ) {
        continue;
      } else {
        players.push(player);
      }
    }
    return players;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player with specific IDCard *-*
 */
const getPlayerByIDCard = async (IDCard) => {
  try {
    /*const player = (await DataStore.query(Player)).filter(
            player => (player.IDCard === IDCard && player.Deleted==false)
        );
        const playerCopy = JSON.parse(JSON.stringify(player));
        let NationalityName = NationalityAPI.getNationalityFromShortName(player.Nationality);
        playerCopy.Nationality = NationalityName;
        return playerCopy*/
    return (await DataStore.query(Player)).filter(
      (player) => player.IDCard === IDCard && player.Deleted == false
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * Add player to database
 */
const addPlayer = async (player) => {
  // putting in the BD the id of the country
  player.Deleted = false;
  try {
    DataStore.save(new Player(player));
  } catch (error) {
    console.log(error);
  }
};

const PlayerAPI = {
  getPlayer: getPlayer,
  getPlayers: getPlayers,
  getTrainingSessionPlayers: getTrainingSessionPlayers,
  getPlayerByIDCard: getPlayerByIDCard,
  addPlayer: addPlayer,
  getPlayerName: getPlayerName,
  getPlayerAge: getPlayerAge,
  getPlayerNationality: getPlayerNationality,
  getPlayerIDcard: getPlayerIDcard,
  getPlayerPosition: getPlayerPosition,
};

export default PlayerAPI;
