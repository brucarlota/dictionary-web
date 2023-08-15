import { useContext, useState } from "react";
import SwitchWrapper from "./Switch.styles";
import useSwitchTheme from "../../hooks/useSwitchTheme";

const Switch = ({ id }) => {
  const [checked, setChecked] = useState(true);
  const { theme, changeTheme } = useSwitchTheme();

  const handleSwitch = () => {
    setChecked(!checked);
    changeTheme(checked ? 'dark' : 'light');
  }
  
  return <SwitchWrapper id={id} className={id} onChange={handleSwitch} checked={!checked}></SwitchWrapper>;
};

export default Switch;