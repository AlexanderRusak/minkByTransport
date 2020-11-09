import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import {
  removeBookStation,
  setBookedStation,
} from "../store/actions/directions";
import { THEME } from "../theme";

export const AppStationItem = ({
  stopName,
  timeTableHandler,
  wayId,
  isBooked,
  isBookedScreen,
}) => {
  const dispatch = useDispatch();
  const [booked, setBooked] = useState(isBookedScreen ? true : !!isBooked);
  return (
    <TouchableOpacity style={styles.wrapper} onPress={timeTableHandler}>
      <Text style={styles.text}>{stopName.name}</Text>
      <TouchableOpacity
        onPress={() => {
          const stopId = Object.values(stopName)[0];
          !isBookedScreen && !isBooked
            ? dispatch(setBookedStation(wayId, stopId))
            : dispatch(removeBookStation(stopId));
          isBookedScreen && dispatch(removeBookStation(stopId));
          setBooked(!booked);
        }}
      >
        <FontAwesome
          name={booked ? "star" : "star-o"}
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
