import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { THEME } from "../theme";
import { Button } from "react-native-elements";

export const SettingsScreen = ({ navigation }) => {
  const [isBigFont, setIsBigFont] = useState(false);

  const aboutHandler = () => {
    navigation.navigate("About");
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <Button
          titleStyle={styles.text}
          buttonStyle={styles.button}
          title="О приложении"
          onPress={aboutHandler}
        />
      </View>
      <View style={styles.appFont}>
        <Text style={styles.text}>Крупный шрифт</Text>
        <CheckBox checked={isBigFont} fontFamily="open-regular" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  appFont: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontFamily: "open-regular",
    fontSize: THEME.FONT_SIZE_DEFAULT,
  },
  button: {
    backgroundColor: THEME.MAIN_COLOR,
  },
});
