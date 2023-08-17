import { useState } from "react";
import SwitchWrapper from "./Switch.styles";
import useSwitchTheme from "../../hooks/useSwitchTheme";

const Switch = ({ id }) => {
  const [checked, setChecked] = useState(true);
  const { changeTheme } = useSwitchTheme();

  const handleSwitch = () => {
    setChecked(!checked);
    changeTheme(checked ? 'dark' : 'light');
  };
  
  return <SwitchWrapper id={id} className={id} aria-label="Switch theme" onChange={handleSwitch} checked={!checked} />;
};

export default Switch;