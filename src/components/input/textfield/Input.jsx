import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "../../../icons";
import InputWrapper from "./Input.styles";
import useSwitchTheme from "../../../hooks/useSwitchTheme";
import Typography from "../../typography/Typography";

const Input = ({ id, handleSearch }) => {
  const { theme } = useSwitchTheme();
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState();
  const [error, setError] = useState(false);
  const errorText = "Whoops, can't be empty…";

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const search = () => {
    if (value) {
      setError(false);
      handleSearch(value);
    } else {
      setError(true);
      handleSearch('');
    }
  };

  const handleClick = () => {
    search();
  };

  return (
    <>
      <InputWrapper
        id={id}
        className={`${id} ${focused ?? 'focused'}`}
        params={{theme, error, focused}}
        onChange={(e) => handleChange(e)}
        sx={{ m: 1, width: "25ch" }}
        onFocus={onFocus} 
        onBlur={onBlur} 
        error={error}
        placeholder="Search for any word…"
        InputProps={{
          endAdornment: <InputAdornment position="end" onClick={handleClick}><Search id="Input__searchIcon"/></InputAdornment>
        }}
      />
      {error && <Typography id="errorText" variant="caption" text={errorText} color="#FF5252" />}
    </>
  );
};

export default Input;