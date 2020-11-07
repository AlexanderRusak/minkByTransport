import { DB, StationTable } from "../../db";
import {
  GET_DIRECTIONS,
  REMOVE_DIRECTION_BOOK,
  SET_DIRECTION_BOOK,
  GET_STATIONS,
  REMOVE_STATION_BOOK,
  SET_STATION_BOOK,
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

export const getBookedStations = () => async (dispatch) => {
  const data = await StationTable.getStations();
  const directionIdArray = data.map((station) => Object.values(station)[1]);
  const stopsIdArray = data.map((station) => Object.values(station)[2]);
  dispatch({
    type: GET_STATIONS,
    stationsArray: [directionIdArray, stopsIdArray],
  });
};
export const setBookedStation = (directionId, stopId) => async (dispatch) => {
  await StationTable.setStationsData(directionId, stopId);
  dispatch({
    type: SET_STATION_BOOK,
    directionsArray: [directionId, stopId],
  });
};
export const removeBookStation = (stopId) => async (dispatch) => {
  await StationTable.removeStation(stopId);
  const data = await StationTable.getStations();
  const directionIdArray = data.map((station) => Object.values(station)[1]);
  const stopsIdArray = data.map((station) => Object.values(station)[2]);

  dispatch({
    type: REMOVE_STATION_BOOK,
    stationsArray: [directionIdArray, stopsIdArray],
  });
};
