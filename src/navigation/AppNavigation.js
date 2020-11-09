import React from "react";
import { Button, Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StationScreen } from "../screens/StationScreen";
import { TransportDirectionScreen } from "../screens/TransportDirectionScreen";
import { TimeTableScreen } from "../screens/TimeTableScreen";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { THEME } from "../theme";
import { BusScreen } from "../screens/transportScreens/BusScreen";
import { TrolleybusScreen } from "../screens/transportScreens/TrolleyBusScreen";
import { TrainScreen } from "../screens/transportScreens/TrainScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { BookScreen } from "../screens/transportScreens/BookScreen";
import { AboutScreen } from "../screens/settingScreens/About";

export const iconColor = (isFocused) => {
  if (Platform.OS === "ios" && isFocused) {
    return THEME.MAIN_COLOR;
  }
  if (Platform.OS === "ios" && !isFocused) {
    return THEME.INACTIVE_TINT_COLOR;
  }
  if (Platform.OS === "android" && isFocused) {
    return THEME.MAIN_COLOR;
  }
  if (Platform.OS === "android" && !isFocused) {
    return THEME.INACTIVE_TINT_COLOR;
  }
};
const headerOptions = (navigation) => ({
  headerTintColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : THEME.DEFAULT,
  headerTitleStyle: {
    fontFamily: "open-regular",
    fontSize: 25,
  },

  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? THEME.MAIN_COLOR : THEME.DEFAULT,
  },
  headerBackTitle: "Назад",
  headerRight: () => (
    <FontAwesome
      name="home"
      onPress={() => {
        navigation.navigate("TopBar", {});
      }}
      size={THEME.ICON_TOP_TAB_SIZE}
      color={Platform.OS === "ios" ? THEME.MAIN_COLOR : THEME.DEFAULT}
      style={{ paddingRight: 10 }}
    />
  ),
});
const topBarConfiguration = {
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : THEME.DEFAULT,
    },
    showIcon: true,
    showLabel: false,
    iconStyle: {
      width: "100%",
      height: "100%",
    },
    style: {
      backgroundColor:
        Platform.OS === "android" ? THEME.MAIN_COLOR : THEME.DEFAULT,
      marginTop: 15,
    },
  },
};

const topTabNavigator = createMaterialTopTabNavigator(
  {
    Bus: BusScreen,
    Trolleybus: TrolleybusScreen,
    Train: TrainScreen,
    Booked: BookScreen,
  },
  topBarConfiguration
);

const topTabDirectionNavigator = createStackNavigator({
  TopBar: {
    screen: topTabNavigator,
    navigationOptions: {
      headerShown: false,
      style: {
        backgroundColor:
          Platform.OS === "android" ? THEME.MAIN_COLOR : THEME.DEFAULT,
      },
    },
  },
  Directions: {
    screen: TransportDirectionScreen,
    navigationOptions: ({ navigation }) => headerOptions(navigation),
  },
  Station: {
    screen: StationScreen,
    navigationOptions: ({ navigation }) => headerOptions(navigation),
  },
  TimeTable: {
    screen: TimeTableScreen,
    navigationOptions: ({ navigation }) => headerOptions(navigation),
  },
});
const AboutComponentScreen = createStackNavigator({
  About: {
    screen: AboutScreen,
  },
});
const settingsComponent = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: "Настройки",
      headerTitleStyle: {
        fontFamily: "open-regular",
        fontSize: THEME.FONT_SIZE_DEFAULT,
        color: THEME.MAIN_COLOR,
      },
    },
  },
  About: {
    screen: AboutComponentScreen,
    navigationOptions: {
      headerTitle: "Информация",
      headerTitleStyle: {
        fontFamily: "open-regular",
        fontSize: THEME.FONT_SIZE_DEFAULT,
        color: THEME.MAIN_COLOR,
      },
      headerTintColor:THEME.MAIN_COLOR
    },
  },
});

const bottonTabNavigation = createBottomTabNavigator(
  {
    Main: {
      screen: topTabDirectionNavigator,
      navigationOptions: {
        tabBarLabel: "Главная",
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="list" size={25} color={iconColor(focused)} />
        ),
      },
    },
    Setting: {
      screen: settingsComponent,
      navigationOptions: {
        tabBarLabel: "Настройки",
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="settings"
            size={THEME.FONT_SIZE_DEFAULT}
            color={iconColor(focused)}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        alignItems: "flex-start",
      },
      activeTintColor: THEME.MAIN_COLOR,
      inactiveTintColor: "#ccc",
    },
  }
);

export const AppNavigation = createAppContainer(bottonTabNavigation);
