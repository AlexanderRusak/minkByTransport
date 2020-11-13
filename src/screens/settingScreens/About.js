import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Linking, FlatList,Dimensions } from "react-native";
import { Button } from "react-native-elements";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RABOTABY_URL,
  STACK_LISTS,
} from "../../Links";
import { GET_THEME } from "../../theme";

export const AboutScreen = () => {


  const mailHandler = () => {
    const email = "rusak.alexander2017@yandex.ru";
    const subject = "Отзыв о приложении";
    Linking.openURL(`mailto:${email}?subject=${subject}`);
  };
  const urlHandler = (type) => {
    if (type === "git") {
      Linking.openURL(GITHUB_URL);
    }
    if (type === "linkedin") {
      Linking.openURL(LINKEDIN_URL);
    }
    if (type === "rabota") {
      Linking.openURL(RABOTABY_URL);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View>
          <Text style={styles.textHeader}>Разработчик:</Text>
          <Text style={styles.text}>Александр Русак</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          title={"Оставить отзыв"}
          onPress={mailHandler}
          titleStyle={styles.text}
        />
      </View>
      <View style={styles.underLine}></View>
      <View style={styles.innerWrapper}>
        <Button
          title="GitHub"
          titleStyle={styles.titleStyle}
          onPress={() => {
            urlHandler("git");
          }}
          buttonStyle={styles.iconStyle}
          icon={
            <FontAwesome5
              name="github"
              size={GET_THEME().ICON_TOP_TAB_SIZE}
              style={styles.iconStyle}
            />
          }
        />
        <Button
          title="LinkedIn"
          titleStyle={styles.titleStyle}
          onPress={() => {
            urlHandler("linkedin");
          }}
          buttonStyle={styles.iconStyle}
          icon={
            <FontAwesome5
              name="linkedin"
              size={GET_THEME().ICON_TOP_TAB_SIZE}
              style={styles.iconStyle}
            />
          }
        />
        <Button
          title="Rabota.by"
          titleStyle={styles.titleStyle}
          onPress={() => {
            urlHandler("rabota");
          }}
          buttonStyle={styles.iconStyle}
          icon={
            <FontAwesome5
              name="briefcase"
              size={GET_THEME().ICON_TOP_TAB_SIZE}
              style={styles.iconStyle}
            />
          }
        />
      </View>
      <View style={styles.underLine}></View>
      <View style={styles.innerWrapperStack}>
        <Text style={styles.textHeader}>Исрользуемые технологии:</Text>
        <FlatList
          data={STACK_LISTS}
          renderItem={(item) => <Text style={styles.text}>{item.item}</Text>}
          keyExtractor={(index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  innerWrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height:Dimensions.get("screen").height*0.1,
    marginBottom: 10,
  },
  innerWrapperStack:{
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "flex-start",
    height:Dimensions.get("screen").height*0.4,
    marginBottom: 10,
  },
  text: {
    fontFamily: "open-regular",
    fontSize: GET_THEME().FONT_SIZE_DEFAULT,
  },
  textHeader:{
    fontFamily: "open-bold",
    fontSize: GET_THEME().FONT_SIZE_DEFAULT,
  },
  button: {
    height: "100%",
    backgroundColor: GET_THEME().MAIN_COLOR,
  },
  underLine: {
    width: "100%",
    height: 2,
    backgroundColor: GET_THEME().INACTIVE_TINT_COLOR,
  },
  iconStyle: {
    color: GET_THEME().MAIN_COLOR,
    backgroundColor: "transparent",
    flexDirection: "column",
  },
  titleStyle: {
    color: "black",
    fontFamily: "open-regular",
  },
});
