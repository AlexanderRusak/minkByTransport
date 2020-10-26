import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { AppTableItem } from "../components/AppTableItem";
import { THEME } from "../theme";

export const TimeTableScreen = ({ navigation }) => {
  const buttons = ["Будние дни недели"];
  const day = new Date().getDay();;
  const indexDay =day!== 0 || 6 ? 0 : day == 6 ? 1 : 2;
  const [index, setIndex] = useState(indexDay);
  const [stopId, stopIndex, wayId, tableArray] = navigation.state.params;
  const [weekDays, weekEnds, weekDaysArrives, weekEndsArrives] = tableArray;
  weekEnds && buttons.push("Сб", "Вс");

  const [timeTable, setTimeTable] = useState(weekDays);
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
      <View>
        <AppTableItem table={index === 0 ? weekDaysArrives : weekEndsArrives} />
      </View>
    </View>
  );
};
TimeTableScreen.navigationOptions = {
  headerTitle: "Расписание",
};
