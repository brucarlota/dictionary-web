import {HeaderWrapper, ControlsWrapper} from "./Header.styles";
import { Switch, Autocomplete } from "../../components";
import { Divider } from "@mui/material";

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <div className="icon">
        <img className="header__logo" src="src/assets/iconoir_book.png"></img>
      </div>
      <ControlsWrapper className="header__controls">
        <Autocomplete id="header__font"></Autocomplete>
        <Divider className="header__divider" orientation="vertical" variant="middle" flexItem />
        <Switch id="header__themeSelector"></Switch>
        <img className="header__image-moon" src="src/assets/iconoir_half-moon.png"></img>
      </ControlsWrapper>
    </HeaderWrapper>
  );
};

export default Header;