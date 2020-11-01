import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { iconColor } from "../../navigation/AppNavigation";
import { THEME } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";

export const BookScreen = () => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.wrapper}>
      <ButtonGroup
        buttons={["Маршруты", "Остановки"]}
        selectedIndex={index}
        onPress={(selectedIndex) =>setIndex(selectedIndex)}
        selectedButtonStyle={{ backgroundColor:THEME.MAIN_COLOR}}
        containerStyle={{borderRadius:5}}
      />    
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
