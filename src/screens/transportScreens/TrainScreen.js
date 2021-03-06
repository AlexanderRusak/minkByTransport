import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { iconColor } from "../../navigation/AppNavigation";
import { GET_THEME } from "../../theme";
import AppTransportItem from "../../components/AppTransportItem";
import { FontAwesome5 } from "@expo/vector-icons";
import { DATA } from "../../data/routes";

export const TrainScreen = () => {
  let trainRoutesCount = {};
  const trainData = DATA.filter((trainItem) => trainItem.transport === "tram");
  trainRoutesCount = trainData.filter(function (obj) {
    return obj.routeNum in trainRoutesCount
      ? 0
      : (trainRoutesCount[obj.routeNum] = 1);
  });
  const getColumns = () => {
    return Math.trunc(Dimensions.get("window").width / 70).toString();
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.renderItems}
        data={trainRoutesCount}
        numColumns={getColumns()}
        columnWrapperStyle={{ flex: 1, justifyContent: "flex-start" }}
        renderItem={(item) => (
          <AppTransportItem
            number={item.item.routeNum}
            directions={trainData.filter(
              (directionItem) => directionItem.routeNum === item.item.routeNum
            )}
            type={trainRoutesCount.transport}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

TrainScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <FontAwesome5
      color={iconColor(focused)}
      name="train"
      size={GET_THEME().ICON_TOP_TAB_SIZE}
    />
  ),
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
  },
});
