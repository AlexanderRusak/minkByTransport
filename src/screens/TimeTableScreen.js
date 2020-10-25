import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";

import { THEME } from "../theme";

export const TimeTableScreen = ({ navigation }) => {
  const buttons = ["Будние дни недели"];
  const [index, setIndex] = useState(0);
  const [stopId, stopIndex, wayId, tableArray] = navigation.state.params;
  const [weekDays, weekEnds, weekDaysArrives, weekEndsArrives] = tableArray;
  weekEnds[1] && buttons.push("Сб");
  weekEnds[0] && buttons.push("Вс");
  const [timeTable, setTimeTable] = useState(weekDays);
  console.log(weekEnds[0],weekEnds[1],weekEndsArrives.length);
  const changeTableButtonHandler = (selectedIndex) => {
    setIndex(selectedIndex);
    selectedIndex != 0 ? setTimeTable(weekEnds) : setTimeTable(weekDays);
  };
  return (
    <View>
      <View>
        <ButtonGroup
          onPress={(selectedIndex) => changeTableButtonHandler(selectedIndex)}
          buttons={buttons}
          selectedIndex={index}
          selectedButtonStyle={{ backgroundColor: THEME.MAIN_COLOR }}
        />
      </View>
      <Text>{index===0?weekDaysArrives:weekEndsArrives}</Text>
    </View>
  );
};
TimeTableScreen.navigationOptions = {
  headerTitle: "Расписание",
};
