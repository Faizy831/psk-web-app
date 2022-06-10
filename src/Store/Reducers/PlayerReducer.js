import Actions from "../Types";

const initialState = {
  PlayerName: "",
  PlayerAge: "",
  PlayerPosition: "",
  PlayerNationality: "",
  PlayerIDcard: "",

};

const Player = (state = initialState, { payload, type }) => {
  switch (type) {
    case Actions.PLAYERNAME:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Player;
