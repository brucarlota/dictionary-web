import { createContext, useContext, useState} from "react";

export const ThemeSwitchContext = createContext();
ThemeSwitchContext.displayName = 'ThemeSwitch';

export default function ThemeSwitchProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeSwitchContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};