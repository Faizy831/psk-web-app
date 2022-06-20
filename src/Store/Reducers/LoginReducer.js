import Actions from "../Types";

const initialState = {
  IdCard: "",
  Nationality: "",
  playerID: "",
};

const Player = (state = initialState, { payload, type }) => {
  switch (type) {
    case Actions.PLAYERBYIDCARDANDNATIONALITY:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Player;
