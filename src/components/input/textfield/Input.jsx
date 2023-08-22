import { useRef, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "../../../icons";
import InputWrapper from "./Input.styles";
import useSwitchTheme from "../../../hooks/useSwitchTheme";
import Typography from "../../typography/Typography";

const Input = ({ id, handleSearch }) => {
  const inputRef = useRef(null);
  const { theme } = useSwitchTheme();
  const [value, setValue] = useState();
  const [error, setError] = useState(false);
  const errorText = "Whoops, can't be empty…";

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value) {
      setError(false);
      handleSearch(value);
    } else {
      setError(true);
      handleSearch('');
    }
  };

  return (
    <>
      <InputWrapper 
        params={{theme, error}}
        ref={inputRef}
        id={id}
        className={id}
        onChange={(e) => handleChange(e)}
        sx={{ m: 1, width: "25ch" }}
        error={error}
        InputProps={{
          endAdornment: <InputAdornment position="end" onClick={handleClick}><Search id="Input__searchIcon"/></InputAdornment>
        }}
      />
      {error && <Typography id="errorText" variant="caption" text={errorText} color="#FF5252" />}
    </>
  );
};

export default Input;