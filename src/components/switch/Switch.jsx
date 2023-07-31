import SwitchWrapper from "./Switch.styles";

const Switch = ({ id }) => {
  return <SwitchWrapper id={id} className={id} defaultChecked></SwitchWrapper>;
};

export default Switch;