import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";

import { THEME } from "../theme";

export const TimeTableScreen = ({ navigation }) => {
  const buttons = ["Будние дни недели", "Сб", "Вс"];

  const [stopId, stopIndex, wayId, tableArray] = navigation.state.params;
  const [
    weekDaysArray,
    weekEndsArray,
    weekDaysArrives,
    weekEndsArrives,
  ] = tableArray;
  console.log(
    weekDaysArray,
    weekEndsArray,
    weekDaysArrives&&weekDaysArrives.length,
    weekEndsArrives&&weekEndsArrives.length
  );
  return (
    <View>
      <View>
        <ButtonGroup
          buttons={buttons}
          selectedIndex={0}
          selectedButtonStyle={{ backgroundColor: THEME.MAIN_COLOR }}
        />
      </View>
      <View>
        <Text>07</Text>
        <Text>56</Text>
      </View>
    </View>
  );
};
TimeTableScreen.navigationOptions = {
  headerTitle: "Расписание",
};
