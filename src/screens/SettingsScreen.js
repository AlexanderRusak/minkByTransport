import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/actions/settings";
import { CheckBox } from "react-native-elements";
import { GET_THEME, DARKCYAN, MAROON, OLIVEDRAB, LIGHT_CORAL } from "../theme";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
export const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isBigFont, setIsBigFont] = useState(false);
  const [isBoldFont, setIsBoldFont] = useState(false);
  const [isTheme, setIsTheme] = useState(3);
  const aboutHandler = () => {
    navigation.navigate("About");
  };

  const themeArrayColor = [LIGHT_CORAL, DARKCYAN, MAROON, OLIVEDRAB];
  const getTheme=GET_THEME();
  const themeHandler = (index, color) => {
    setIsTheme(index);
    dispatch(changeTheme(color));
    getTheme.MAIN_COLOR=color;
    
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
      {/* <View style={styles.appFont}>
        <Text style={styles.text}>Крупный шрифт</Text>
        <CheckBox
          checked={isBigFont}
          fontFamily="open-regular"
          onPress={() => setIsBigFont(!isBigFont)}
          checkedColor={GET_THEME().MAIN_COLOR}
        />
      </View>
      <View style={styles.appFont}>
        <Text style={{ ...styles.text, fontFamily: "open-bold" }}>
          Жирный шрифт
        </Text>
        <CheckBox
          checked={isBoldFont}
          fontFamily="open-regular"
          onPress={() => setIsBoldFont(!isBoldFont)}
          checkedColor={GET_THEME().MAIN_COLOR}
        />
      </View>
      <View style={styles.appFont}>
        <Text style={styles.text}>Тема:</Text>

        <FlatList
          numColumns={"4"}
          data={themeArrayColor}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() =>
                themeHandler(Object.values(item)[1], Object.values(item)[0])
              }
            >
              <View
                style={{
                  ...styles.themeBlock,
                  backgroundColor: item.item,
                  borderWidth: isTheme === Object.values(item)[1] ? 2 : 0,
                }}
              ></View>
            </TouchableOpacity>
          )}
          keyExtractor={(index) => index.toString()}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  appFont: {
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontFamily: "open-regular",
    fontSize: GET_THEME().FONT_SIZE_DEFAULT,
  },
  button: {
    backgroundColor: GET_THEME().MAIN_COLOR,
  },
  themeBlock: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    borderColor: "black",
  },
});
