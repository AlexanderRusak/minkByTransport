import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AppDirectionItem } from "../components/AppDirectionItem";

export const TransportDirectionScreen = ({ navigation }) => {
  const [directions] = navigation.state.params;
  const directionHandler = (stops, id) => {
    navigation.navigate("Station", [stops, id]);
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={directions}
        keyExtractor={direction => direction.id.toString()}
        renderItem={(direction) => (
          <AppDirectionItem
            from={direction.item.routeName.split(" - ")[0]}
            to={direction.item.routeName.split(" - ")[1]}
            type={direction.item.transport}
            busNumber={direction.item.routeNum}
            direction={directionHandler}
            id={direction.item.id}
            stops={direction.item.stops}
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
