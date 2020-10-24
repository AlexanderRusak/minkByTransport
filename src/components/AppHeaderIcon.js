import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import * as ICON from "@expo/vector-icons";
export const AppHeaderIcon = () => {
  return (
    <HeaderButton
    
      iconSize={24}
      IconComponent={ICON.FontAwesome5}
      name={"bus"}
    />
  );
};
