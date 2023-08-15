import { useContext } from "react";
import { ThemeSwitchContext } from "../context/ThemeSwitch";

const useSwitchTheme = () => {
  const { theme, setTheme } = useContext(ThemeSwitchContext);

  const changeTheme = (newTheme) => {
    return setTheme(newTheme);
  };

  return {
    theme,
    changeTheme,
  }
};

export default useSwitchTheme;