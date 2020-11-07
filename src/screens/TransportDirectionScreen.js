import React, { useState } from "react";
import { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDirectionItem } from "../components/AppDirectionItem";
import { getDirectionsIdArray } from "../dispatchFunctions";
import { getBookedDirections } from "../store/actions/directions";
export const TransportDirectionScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  dispatch(getBookedDirections());
  const directionsId = useSelector(
    (state) => state.direction.directionIdString
  );
  const directionsArray = directionsId.split(",");
  const [directionsIdArray, setIsBooked] = useState(directionsArray);
  useEffect(() => {
    setIsBooked(directionsArray);
  }, [dispatch]);
  const [directions] = navigation.state.params;
  const directionHandler = (stops, id) => {
    navigation.navigate("Station", [stops, id]);
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={directions}
        keyExtractor={(direction) => direction.id.toString()}
        renderItem={(direction) => (
          <AppDirectionItem
            from={direction.item.routeName.split(" - ")[0]}
            to={direction.item.routeName.split(" - ")[1]}
            type={direction.item.transport}
            busNumber={direction.item.routeNum}
            direction={directionHandler}
            id={direction.item.id}
            stops={direction.item.stops}
            isBooked={directionsIdArray.find(
              (book) => book === direction.item.id.toString()
            )}
          />
        )}
      />
    </View>
  );
};
const transportType = (typeString) => {
  switch (typeString) {
    case "bus":
      return "Автобус";
    case "trolleybus":
      return "Tроллейбус";
    case "train":
      return "Tpамвай";
    default:
      return "";
  }
};
TransportDirectionScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: `${transportType(navigation.state.params[1])} №${
    navigation.state.params[2]
  }`,
  headerBackTitle: "Назад",
});
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 5,
  },
  text: {
    fontSize: 50,
  },
});
