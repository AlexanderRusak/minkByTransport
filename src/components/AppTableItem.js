import React, { useState } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";

import { GET_THEME } from "../theme";

export const AppTableItem = ({ table }) => {
  const filterHoursArray = [
    ...new Set(Array.from(table).map((item) => Math.trunc(item / 60))),
  ];
  const minutesArray = Array.from(table).map((minutes) => minutes / 60);
  const renderTable = filterHoursArray.map((hour) => ({
    hour: hour,
    minutes: minutesArray.filter((minute) => Math.trunc(minute) === hour),
  }));
  const currentMinutes = new Date().getMinutes();
  const currentHours = new Date().getHours();
  let selected = null;
  let isFind = false;
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
            {item.minutes.map((minute) => {
              const currentTime = currentHours * 60 + currentMinutes;
              styles.minute = styles.otherTime;

              if (!isFind && +currentTime <= minute * 60) {
                styles.minute = styles.nextTime;
                selected = minute * 60;
                isFind = true;
              }
              if (selected === minute * 60) {
                styles.minute = styles.nextTime;
              } //FULL SHIT

              return (
                <Text style={styles.minute}>
                  {Math.round((minute - Math.trunc(minute)) * 60).toString()
                    .length == 1
                    ? "0" + Math.round((minute - Math.trunc(minute)) * 60)
                    : Math.round((minute - Math.trunc(minute)) * 60)}
                </Text>
              );
            })}
          </View>
        </View>
      )}
      keyExtractor={(item, index) => `${item.hour + Math.random(index)}`}
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
    borderBottomColor: GET_THEME().INACTIVE_TINT_COLOR,
  },
  hours: {
    width: 30,
  },
  hour: {
    fontFamily: "open-bold",
    fontSize: 22,
    color: GET_THEME().MAIN_COLOR,
  },
  minutes: {
    marginLeft: 10,
    flexDirection: "row",
  },
  minute: {
    paddingLeft: 5,
  },
  nextTime: {
    fontSize: 20,
    color: GET_THEME().MAIN_COLOR,
    fontFamily: "open-bold",
    paddingLeft: 5,
  },
  otherTime: {
    fontFamily: "open-regular",
    fontSize: 18,
    paddingLeft: 5,
  },
});
