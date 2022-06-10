import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const ConfigureStore = () => {
  const rootReducer = combineReducers({});

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return { store };
};

export default ConfigureStore;
