import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { timesFirst } from "../data/timesData/timesFirst";
import { timesSecond } from "../data/timesData/timesSecond";
import { timesThird } from "../data/timesData/timesThird";
import { timesFourth } from "../data/timesData/timesFourth";
import { timesFifth } from "../data/timesData/timesFifth";
import { timesSix } from "../data/timesData/timesSix";
import { timesSeven } from "../data/timesData/timesSeven";
import { timesEight } from "../data/timesData/timesEight";
import { timesNine } from "../data/timesData/timesNine";
import { AppStationItem } from "../components/AppStationItem";
import { STOPS } from "../data/stops";
import { useDispatch, useSelector } from "react-redux";
import { getBookedStations } from "../store/actions/directions";

export const StationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useCallback(() => {
    dispatch(getBookedStations());
  });

  const stopId = useSelector((state) => state.direction.stopsIdArray);
  console.log(stopId);
  const [stopArray, setStopArray] = useState(stopId);
  useEffect(() => {
    setStopArray(stopId);
  }, [dispatch]);

  const [stopsCount, directionId] = navigation.state.params;
  const timeTableHandler = async (id, current, way) => {
    const times = [
      timesFirst,
      timesSecond,
      timesThird,
      timesFourth,
      timesFifth,
      timesSix,
      timesSeven,
      timesEight,
      timesNine,
    ];
    let getTimeTable = await times.map((timeArr) =>
      timeArr.find((timeObj) => timeObj.way_id === +way)
    );
    const filterdTimeTable = await getTimeTable.filter(
      (item) => item !== undefined
    );
    const timeTableArray = await [
      filterdTimeTable[0].trips_by_days[0].days_of_week,
      filterdTimeTable[0].trips_by_days.length > 1
        ? filterdTimeTable[0].trips_by_days[1].days_of_week
        : null,
      filterdTimeTable[0].trips_by_days[0].arrives[current],
      filterdTimeTable[0].trips_by_days.length > 1
        ? filterdTimeTable[0].trips_by_days[1].arrives[current]
        : null,
    ];
    console.log(id);
    await navigation.navigate("TimeTable", [id, current, way, timeTableArray]);
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={stopsCount}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <AppStationItem
            timeTableHandler={() => {
              timeTableHandler(item, index, directionId);
            }}
            stopName={STOPS.find((stop) => stop.id === item)}
            index={index}
            wayId={directionId}
            isBooked={stopArray.find((stop) => stop === item)}
          />
        )}
      />
    </View>
  );
};
StationScreen.navigationOptions = {
  headerTitle: "Остановки",
};
const styles = StyleSheet.create({
  wrapper: {},
});
