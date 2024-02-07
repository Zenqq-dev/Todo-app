import { createContext, useContext } from "react";
export type darkContext = {
  darkMode: boolean;
  toggleDarkMode: (val: boolean) => void;
};
export const ThemeContext = createContext<darkContext>({
  darkMode: false,
  toggleDarkMode: (val: boolean) => {},
});
export const useDarkContext = () => useContext(ThemeContext);
