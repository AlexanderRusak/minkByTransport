import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { THEME } from "../theme";

export const AppStationItem = ({
  stopName,
  timeTableHandler,
  wayId,
  index,
}) => {
  const [isBooked, setIsBooked] = useState(false);
  return (
    <TouchableOpacity style={styles.wrapper} onPress={timeTableHandler}>
      <Text style={styles.text}>{stopName.name}</Text>
      <TouchableOpacity
        onPress={() => {
          setIsBooked(!isBooked);
        }}
      >
        <FontAwesome
          name={isBooked ? "star" : "star-o"}
          size={THEME.ICON_TOP_TAB_SIZE}
          color={THEME.MAIN_COLOR}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: THEME.INACTIVE_TINT_COLOR,
  },
  text: {
    fontFamily: "open-regular",
    fontSize: 25,
  },
});
