import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Button } from "react-native-elements";
import { GITHUB_URL, LINKEDIN_URL, RABOTABY_URL } from "../../Links";
import { THEME } from "../../theme";

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
          <Text style={styles.text}>Разработчик:</Text>
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
          title="gitHub"
          titleStyle={styles.titleStyle}
          onPress={() => {
            urlHandler("git");
          }}
          buttonStyle={styles.iconStyle}
          icon={
            <FontAwesome5
              name="github"
              size={THEME.ICON_TOP_TAB_SIZE}
              style={styles.iconStyle}
            />
          }
        />
        <Button
          title="linkedIn"
          titleStyle={styles.titleStyle}
          onPress={() => {
            urlHandler("linkedin");
          }}
          buttonStyle={styles.iconStyle}
          icon={
            <FontAwesome5
              name="linkedin"
              size={THEME.ICON_TOP_TAB_SIZE}
              style={styles.iconStyle}
            />
          }
        />
        <Button
          title="rabota.by"
          titleStyle={styles.titleStyle}
          onPress={() => {
            urlHandler("rabota");
          }}
          buttonStyle={styles.iconStyle}
          icon={
            <FontAwesome5
              name="briefcase"
              size={THEME.ICON_TOP_TAB_SIZE}
              style={styles.iconStyle}
            />
          }
        />
      </View>
      <View style={styles.underLine}></View>
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
    height: "25%",
    marginBottom: 10,
  },
  text: {
    fontFamily: "open-regular",
    fontSize: THEME.FONT_SIZE_DEFAULT,
  },
  button: {
    height: "100%",
    backgroundColor: THEME.MAIN_COLOR,
  },
  underLine: {
    width: "100%",
    height: 2,
    backgroundColor: THEME.INACTIVE_TINT_COLOR,
  },
  iconStyle: {
    color: THEME.MAIN_COLOR,
    backgroundColor: "transparent",
    flexDirection: "column",
  },
  titleStyle: {
    color: "black",
    fontFamily: "open-regular",
  },
});
