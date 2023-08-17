import { useContext } from "react";
import { FontFamilySwitchContext } from "../context/FontFamilySwitch";

const useSwitchFontFamily = () => {
  const { fontFamily, setFontFamily } = useContext(FontFamilySwitchContext);

  const changeFontFamily = (newFont) => {
    return setFontFamily(newFont);
  };

  return {
    fontFamily,
    changeFontFamily,
  };
};

export default useSwitchFontFamily;