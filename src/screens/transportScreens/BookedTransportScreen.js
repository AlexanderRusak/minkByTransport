import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { iconColor } from "../../navigation/AppNavigation";
import { THEME } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";

export const BookedTransportScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Booked</Text>
    </View>
  );
};

BookedTransportScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <FontAwesome
      color={iconColor(focused)}
      name="star-o"
      size={THEME.ICON_TOP_TAB_SIZE}
    />
  ),
  tabBarVisible: false,
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
