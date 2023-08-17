import { createContext, useState} from "react";

export const FontFamilySwitchContext = createContext();
FontFamilySwitchContext.displayName = 'FontFamilySwitch';

export default function FontFamilySwitchProvider({ children }) {
  const [fontFamily, setFontFamily] = useState('serif');

  return (
    <FontFamilySwitchContext.Provider value={{ fontFamily, setFontFamily }}>
      {children}
    </FontFamilySwitchContext.Provider>
  );
}