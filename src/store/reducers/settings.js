import { LIGHT_CORAL } from "../../theme";
import { CHANGE_THEME, UPDATE_THEME } from "../types";
const initialState = {
  MAIN_COLOR: LIGHT_CORAL,
  DEFAULT: "#fff",
  INACTIVE_TINT_COLOR: "#ccc",
  ICON_TOP_TAB_SIZE: 50,
  FONT_SIZE_DEFAULT: 24,
};

export const settingsRenderer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        MAIN_COLOR: action.color,
      };
    case UPDATE_THEME: {
      return {
        ...state,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
