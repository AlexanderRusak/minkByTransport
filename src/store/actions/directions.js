import { DB } from "../../db";
import {
  GET_DIRECTIONS,
  REMOVE_DIRECTION_BOOK,
  SET_DIRECTION_BOOK,
} from "../types";

export const getBookedDirections = () => {
  return async (dispatch) => {
    const directionsId = await DB.getDirections();
    const directionsIdArray = directionsId.map(
      (direction) => Object.values(direction)[1]
    );
    const directionsString = directionsIdArray.join();
    dispatch({
      type: GET_DIRECTIONS,
      directionsString,
    });
  };
};
export const setBookedDirectionId = (id) => async (dispatch) => {
  await DB.setDirectionId(id);
  dispatch({
    type: SET_DIRECTION_BOOK,
    id,
  });
};

export const removeBookedDirections = (id) => async (dispatch) => {
  console.log("in");
  await DB.removeDirectionId(id);
  const directionsId = await DB.getDirections();
  const directionsIdArray = directionsId.map(
    (direction) => Object.values(direction)[1]
  );
  const directionsString = directionsIdArray.join();
  dispatch({
    type: REMOVE_DIRECTION_BOOK,
    directionsString,
  });
};
