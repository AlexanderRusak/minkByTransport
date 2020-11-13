import { createStore, combineReducers, applyMiddleware } from "redux";
import { directionReducer } from "./reducers/directions";
import { settingsRenderer } from "./reducers/settings";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  direction: directionReducer,
  settings: settingsRenderer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
