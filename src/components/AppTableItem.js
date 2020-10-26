import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";

import { THEME } from "../theme";

export const AppTableItem = ({ table }) => {
  const filterHoursArray = [
    ...new Set(Array.from(table).map((item) => Math.trunc(item / 60))),
  ];
  const minutesArray = Array.from(table).map((minutes) => minutes / 60);

  const renderTable = filterHoursArray.map((hour) => ({
    hour: hour,
    minutes: minutesArray.filter((minute) => Math.trunc(minute) === hour),
  }));
  return (
    <FlatList
      data={renderTable}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <View style={styles.hours}>
            <Text style={styles.hour}>
              {item.hour != 24 ? item.hour : "00"}
            </Text>
          </View>
          <View style={styles.minutes}>
            {item.minutes.map((minutes) => (
              <Text style={styles.minute}>
                {Math.round((minutes - Math.trunc(minutes)) * 60).toString()
                  .length == 1
                  ? "0" + Math.round((minutes - Math.trunc(minutes)) * 60)
                  : Math.round((minutes - Math.trunc(minutes)) * 60)}
              </Text>
            ))}
          </View>
        </View>
      )}
      keyExtractor={(item) => item.hour.toString()}
    />
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    marginHorizontal: 10,
    marginBottom: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: THEME.INACTIVE_TINT_COLOR,
  },
  hours: {
    width: 20,
  },
  hour: {
    fontFamily: "open-bold",
    fontSize: 22,
    color: THEME.MAIN_COLOR,
  },
  minutes: {
    marginLeft: 10,
    flexDirection: "row",
  },
  minute: {
    paddingLeft: 5,
    fontFamily: "open-regular",
    fontSize: 18,
  },
});
