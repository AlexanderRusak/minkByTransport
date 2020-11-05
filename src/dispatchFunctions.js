import { useDispatch, useSelector } from "react-redux";
import { getBookedDirections } from "./store/actions/directions";

export const getDirectionsIdArray = () => {
  const dispatch = useDispatch();
  dispatch(getBookedDirections());
  const directionsId = useSelector(
    (state) => state.direction.directionIdString
  );
  return directionsId;
};
