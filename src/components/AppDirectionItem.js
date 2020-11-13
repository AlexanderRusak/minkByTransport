import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setBookedDirectionId,
  removeBookedDirections,
} from "../store/actions/directions";

import { GET_THEME } from "../theme";

export const AppDirectionItem = ({
  from,
  to,
  type,
  busNumber,
  direction,
  id,
  stops,
  isBooked,
  isBookedScreen,
}) => {
  const dispatch = useDispatch();
  const [book, setBook] = useState(isBookedScreen ? true : !!isBooked);

  const transportType = (typeString) => {
    switch (typeString) {
      case "bus":
        return "A";
      case "trol":
        return "T";
      case "tram":
        return "Tp";
      default:
        return "";
    }
  };

  const bookHandler = (id) => {
    !isBookedScreen && !isBooked
      ? dispatch(setBookedDirectionId(id))
      : dispatch(removeBookedDirections(id));
    isBookedScreen && dispatch(removeBookedDirections(id));
    setBook(!book);
  };
  return (
    <TouchableOpacity onPress={() => direction(stops, id)}>
      <View style={styles.directionWrapper}>
        <View style={styles.sticker}>
          <Text style={styles.stickerText}>{transportType(type)}</Text>
          <Text style={styles.stickerText}>{busNumber}</Text>
        </View>
        <View style={styles.directionInfo}>
          <Text style={styles.directionInfoFrom}>{from}</Text>
          <Text style={styles.directionInfoTo}>{to}</Text>
        </View>
        <TouchableOpacity
          style={styles.booked}
          onPress={() => {
            bookHandler(id);
          }}
        >
          <FontAwesome
            style={styles.booked}
            name={!book ? "star-o" : "star"}
            size={GET_THEME().ICON_TOP_TAB_SIZE}
            color={GET_THEME().MAIN_COLOR}
            style={{
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  directionWrapper: {
    flex: 1,
    height: 80,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: GET_THEME().INACTIVE_TINT_COLOR,
  },
  sticker: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginHorizontal: 5,
  },
  stickerText: {
    fontFamily: "open-regular",
    fontSize: 20,
  },
  directionInfo: {
    width: "75%",
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  directionInfoFrom: {
    fontFamily: "open-regular",
    fontSize: 20,
  },
  directionInfoTo: {
    fontFamily: "open-regular",
    fontSize: 28,
  },
  booked: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
