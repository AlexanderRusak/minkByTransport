import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { iconColor } from "../../navigation/AppNavigation";
import { THEME } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";
import { DATA } from "../../data/routes";
import { AppDirectionItem } from "../../components/AppDirectionItem";
import { STOPS } from "../../data/stops";
import { AppStationItem } from "../../components/AppStationItem";
import { timesFirst } from "../../data/timesData/timesFirst";
import { timesSecond } from "../../data/timesData/timesSecond";
import { timesThird } from "../../data/timesData/timesThird";
import { timesFourth } from "../../data/timesData/timesFourth";
import { timesFifth } from "../../data/timesData/timesFifth";
import { timesSix } from "../../data/timesData/timesSix";
import { timesSeven } from "../../data/timesData/timesSeven";
import { timesEight } from "../../data/timesData/timesEight";
import { timesNine } from "../../data/timesData/timesNine";

export const BookScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const IdDirection = ["289954", "290677"]; //////moka

  const stopsId = ["15709", "15856"]; //for stops
  const directionStationId = ["270432", "283079"];
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
    console.log(way, id, current);
    let getTimeTable = await times.map((timeArr) =>
      timeArr.find((timeObj) => timeObj.way_id === +way)
    );
    const filteredTimeTable = await getTimeTable.filter(
      (item) => item !== undefined
    );
    const timeTableArray = await [
      filteredTimeTable[0].trips_by_days[0].days_of_week,
      filteredTimeTable[0].trips_by_days.length > 1
        ? filteredTimeTable[0].trips_by_days[1].days_of_week
        : null,
      filteredTimeTable[0].trips_by_days[0].arrives[current],
      filteredTimeTable[0].trips_by_days.length > 1
        ? filteredTimeTable[0].trips_by_days[1].arrives[current]
        : null,
    ];

    await navigation.navigate("TimeTable", [id, current, way, timeTableArray]);
  };

  const directionBookHandler = (stops, id) => {
    navigation.navigate("Station", [stops, id]);
  };
  return (
    <View style={styles.wrapper}>
      <ButtonGroup
        buttons={["Маршруты", "Остановки"]}
        selectedIndex={index}
        onPress={(selectedIndex) => setIndex(selectedIndex)}
        selectedButtonStyle={{ backgroundColor: THEME.MAIN_COLOR }}
        containerStyle={{ borderRadius: 5 }}
      />
      {index === 0 ? (
        <View>
          <FlatList
            data={IdDirection.map((id) => DATA.find((item) => item.id === id))}
            renderItem={(item) => (
              <AppDirectionItem
                from={item.item.routeName.split(" - ")[0]}
                to={item.item.routeName.split(" - ")[1]}
                type={item.item.transport}
                busNumber={item.item.routeNum}
                direction={directionBookHandler}
                id={item.item.id}
                stops={item.item.stops}
              />
            )}
          />
        </View>
      ) : (
        <View>
          {/* stopsId=["15709","15856"], directionStationId=["270432","283079"] */}
          <FlatList
            data={stopsId}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item, index }) => (
              <AppStationItem
                timeTableHandler={() => {
                  const currentStopIndex = DATA.find(
                    (arr) => arr.id === directionStationId[index]
                  ).stops.findIndex((stopIndex) => stopIndex === item);
                  console.log(currentStopIndex, "ddd");

                  timeTableHandler(
                    item,
                    currentStopIndex,
                    directionStationId[index]
                  );
                }}
                stopName={STOPS.find((stop) => stop.id === item)}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

BookScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <FontAwesome
      color={iconColor(focused)}
      name="star-o"
      size={THEME.ICON_TOP_TAB_SIZE}
    />
  ),
};
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 5,
  },
});
