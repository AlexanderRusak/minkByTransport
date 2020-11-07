import {
  GET_DIRECTIONS,
  SET_DIRECTION_BOOK,
  REMOVE_DIRECTION_BOOK,
  GET_STATIONS,
  SET_STATION_BOOK,
  REMOVE_STATION_BOOK,
} from "../types";
const initialState = {
  directionIdString: "",
  directionIdArray: [],
  stopsIdArray: [],
};

export const directionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIRECTIONS:
      return {
        ...state,
        directionIdString: action.directionsString,
      };
    case SET_DIRECTION_BOOK:
      return {
        ...state,
        directionIdString: `${state.directionIdString},${action.id}`,
      };
    case REMOVE_DIRECTION_BOOK:
      return {
        ...state,
        directionIdString: action.directionsString,
      };

    case GET_STATIONS: {
      return {
        ...state,
        directionIdArray: [...action.stationsArray[0]],
        stopsIdArray: [...action.stationsArray[1]],
      };
    }
    case SET_STATION_BOOK:
      return {
        ...state,
        directionIdArray: [
          ...state.directionIdArray,
          action.directionsArray[0],
        ],
        stopsIdArray: [...state.stopsIdArray, action.directionsArray[1]],
      };
    case REMOVE_STATION_BOOK: {
      return {
        ...state,
        directionIdArray: [...action.stationsArray[0]],
        stopsIdArray: [...action.stationsArray[1]],
      };
    }
  }

  return state;
};
