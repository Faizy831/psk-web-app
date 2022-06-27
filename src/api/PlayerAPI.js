import { Player } from "../models";
import { DataStore } from "aws-amplify";
import PlayerTrainingSessionAPI from "./PlayerTrainingSessionAPI";
import { PlayerMedia } from "../models";

/**
 * Query database for player
 *
 * Arguments: playerID
 *
 * Return: Player with all the attribiutes of a player
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
 *
 * Arguments: playerID
 *
 * Return: Players' First and Last Name
 */
const getPlayerName = async (playerID) => {
  try {
    const player = await DataStore.query(Player, playerID);
    return player.FirstName + " " + player.LastName;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player age with specific playerID
 *
 * Arguments: playerID
 *
 * Return: Players' Age
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
 *
 * Arguments: playerID
 *
 * Return: Players' field Position
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
 *
 * Arguments: playerID
 *
 * Return: Players' Nationality
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
 *
 * Arguments: playerID
 *
 * Return: Players' IDCard
 */
const getPlayerIDcard = async (playerID) => {
  try {
    const player = await DataStore.query(Player, playerID);
    return player.IDCard;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for all players
 *
 * Return: Array of all players
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
 *
 * Arguments: trainingSessionID
 *
 * Return: Array of players in a Training Session
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
 * Query database for player with specific IDCard
 *
 * Arguments: IDCard, Nationality
 *
 * Return: Array of players with just one player ([player1])
 */
const getPlayerByIDCardAndNationality = async (IDCard, Nationality) => {
  try {
    /*const player = (await DataStore.query(Player)).filter(
            player => (player.IDCard === IDCard && player.Deleted==false)
        );
        const playerCopy = JSON.parse(JSON.stringify(player));
        let NationalityName = NationalityAPI.getNationalityFromShortName(player.Nationality);
        playerCopy.Nationality = NationalityName;
        return playerCopy*/
    return (await DataStore.query(Player)).filter((player) => {
      return (
        player.IDCard === IDCard &&
        player.Nationality === Nationality &&
        player.Deleted === false
      );
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Add player to database
 *
 * Arguments: Recieves a player
 *
 * Return: Nothing
 */
const addPlayer = async (player) => {
  player.Deleted = false;
  try {
    DataStore.save(new Player(player));
  } catch (error) {
    console.log(error);
  }
};

/**
 * Query database for player's photo in a TS
 */
const getPlayerMedia = async (playerID, tsID) => {
  try {
    return (await DataStore.query(PlayerMedia)).filter((media) => {
      return (
        media.playerID === playerID &&
        media.trainingsessionID === tsID &&
        media.Deleted === false
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const PlayerAPI = {
  getPlayer: getPlayer,
  getPlayers: getPlayers,
  getTrainingSessionPlayers: getTrainingSessionPlayers,
  getPlayerByIDCardAndNationality: getPlayerByIDCardAndNationality,
  addPlayer: addPlayer,
  getPlayerName: getPlayerName,
  getPlayerAge: getPlayerAge,
  getPlayerNationality: getPlayerNationality,
  getPlayerIDcard: getPlayerIDcard,
  getPlayerPosition: getPlayerPosition,
  getPlayerMedia: getPlayerMedia,
};

export default PlayerAPI;
