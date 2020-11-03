import { createStore, combineReducers, applyMiddleware } from "redux";
import { directionReducer } from "./reducers/directions";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  direction: directionReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
