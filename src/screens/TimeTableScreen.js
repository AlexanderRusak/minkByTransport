import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { AppTableItem } from "../components/AppTableItem";
import { GET_THEME } from "../theme";

export const TimeTableScreen = ({ navigation }) => {
  const buttons = ["Будние дни недели"];
  const day = new Date().getDay();
  let indexDay=null;
  if (day === 6 || 0) {
    if (day === 6) {
      indexDay = 1;
    } else {
      indexDay = 2;
    }
  } else {
    indexDay = 0;
  }
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
          selectedButtonStyle={{ backgroundColor: GET_THEME().MAIN_COLOR }}
        />
      </View>
      <View  style={styles.wrapper}>
        <AppTableItem table={index === 0 ? weekDaysArrives : weekEndsArrives} />
      </View>
    </View>
  );
};
TimeTableScreen.navigationOptions = {
  headerTitle: "Расписание",
};
const styles=StyleSheet.create({
  wrapper: {
    height:"90%",
  }
})
