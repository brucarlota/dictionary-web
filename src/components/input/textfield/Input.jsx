import { useRef, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "../../../icons";
import InputWrapper from "./Input.styles";
import useSwitchTheme from "../../../hooks/useSwitchTheme";

const Input = ({ handleSearch }) => {
  const inputRef = useRef(null);
  const { theme } = useSwitchTheme();

  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    handleSearch(value);
  };

  return <InputWrapper 
  theme={theme}
  ref={inputRef}
  id="outlined-start-adornment"
  onChange={(e) => handleChange(e)}
  sx={{ m: 1, width: "25ch" }}
  InputProps={{
    endAdornment: <InputAdornment position="end" onClick={handleClick}><Search id="Input__searchIcon"/></InputAdornment>
  }}
/>;
};

export default Input;