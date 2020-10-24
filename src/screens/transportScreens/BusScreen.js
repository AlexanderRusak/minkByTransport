import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { iconColor } from "../../navigation/AppNavigation";
import { THEME } from "../../theme";
import AppTransportItem from "../../components/AppTransportItem";
import { FontAwesome5 } from "@expo/vector-icons";
import { DATA } from "../../data/routes";

export const BusScreen = () => {
  let busRoutesCount = {};
  const busData = DATA.filter((busItem) => busItem.transport === "bus");
  busRoutesCount = busData.filter(function (obj) {
    return obj.routeNum in busRoutesCount
      ? 0
      : (busRoutesCount[obj.routeNum] = 1);
  });
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.renderItems}
        data={busRoutesCount}
        numColumns={"5"}
        columnWrapperStyle={{ flex: 1, justifyContent: "flex-start" }}
        renderItem={(item) => (
          <AppTransportItem
            number={item.item.routeNum}
            directions={busData.filter(
              (directionItem) => directionItem.routeNum === item.item.routeNum
            )}
            type={busRoutesCount.transport}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

BusScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <FontAwesome5
      color={iconColor(focused)}
      name="bus"
      size={THEME.ICON_TOP_TAB_SIZE}
    />
  ),
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
