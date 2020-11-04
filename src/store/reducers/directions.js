import { GET_DIRECTIONS, SET_DIRECTION_BOOK } from "../types";
const initialState = {
  directionIdString: "",
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
  }

  return state;
};
