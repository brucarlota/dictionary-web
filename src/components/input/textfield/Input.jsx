import { useRef, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "../../../icons";
import InputWrapper from "./Input.styles";

const Input = ({ handleSearch }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    handleSearch(value);
  };

  return <InputWrapper
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