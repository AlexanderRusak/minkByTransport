import { useSelector } from "react-redux";

export const getDirectionsIdArray = () => {
  const directionsId = useSelector(
    (state) => state.direction.directionIdString
  );
  return directionsId;
};
