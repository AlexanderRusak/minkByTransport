import React from "react";
import { View, FlatList, StyleSheet,Dimensions } from "react-native";
import { iconColor } from "../../navigation/AppNavigation";
import { GET_THEME } from "../../theme";
import AppTransportItem from "../../components/AppTransportItem";
import { FontAwesome5 } from "@expo/vector-icons";
import { DATA } from "../../data/routes";

export const TrolleybusScreen = () => {
  let trolRoutesCount = {};
  const trolData = DATA.filter((trolItem) => trolItem.transport === "trol");
  trolRoutesCount = trolData.filter(function (obj) {
    return obj.routeNum in trolRoutesCount
      ? 0
      : (trolRoutesCount[obj.routeNum] = 1);
  });
  const getColumns = () => {
    return Math.trunc(Dimensions.get("window").width / 70).toString();
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.renderItems}
        data={trolRoutesCount}
        numColumns={getColumns()}
        columnWrapperStyle={{ flex: 1, justifyContent: "flex-start" }}
        renderItem={(item) => (
          <AppTransportItem
            number={item.item.routeNum}
            directions={trolData.filter(
              (directionItem) => directionItem.routeNum === item.item.routeNum
            )}
            type={trolRoutesCount.transport}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

TrolleybusScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <FontAwesome5
      color={iconColor(focused)}
      name="bus-alt"
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
