import { CHANGE_THEME, UPDATE_THEME } from "../types";

export const changeTheme = (color) => {
  return {
    type: CHANGE_THEME,
    color,
  };
};
export const updateBackground = () => {
  return {
    type: UPDATE_THEME,
  };
};
