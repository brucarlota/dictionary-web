import { HeaderWrapper, ControlsWrapper } from "./Header.styles";
import { Switch, Autocomplete } from "../../components";
import { Divider } from "@mui/material";

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <div className="icon">
        <a href=""><img className="header__logo" src="/images/logo.svg" alt="Dictionary App logo" /></a>
      </div>
      <ControlsWrapper className="header__controls">
        <Autocomplete id="header__font"></Autocomplete>
        <Divider className="header__divider" orientation="vertical" variant="middle" flexItem />
        <Switch id="header__themeSelector"></Switch>
        <img className="header__image-moon" src="/images/icon-moon.svg" alt="Icon moon indicates theme mode"></img>
      </ControlsWrapper>
    </HeaderWrapper>
  );
};

export default Header;