import { Autocomplete as AutoCompleteMUI, TextField } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useSwitchFontFamily from "../../../hooks/useSwitchFontFamily";

const fonts = () => [
  { fontFamily: 'Serif', id: 'serif' },
  { fontFamily: 'Sans Serif', id: 'sans-serif' },
  { fontFamily: 'Mono', id: 'mono' },
];

const Autocomplete = ({ id }) => {
  const { changeFontFamily } = useSwitchFontFamily();
  const defaultValue = fonts()[0];

  const handleChange = (newValue) => {
    changeFontFamily(newValue.id);
  };

  return (
    <AutoCompleteMUI
      id="disable-clearable"
      disableClearable
      role="combobox"
      className={id}
      options={fonts()}
      defaultValue={defaultValue}
      getOptionLabel={option => option.fontFamily}
      popupIcon={<KeyboardArrowDownIcon className="Input__popupIcon"></KeyboardArrowDownIcon>}
      renderInput={(params) => (<TextField {...params} variant="standard"/>)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      defaultprops={{
        'aria-label': 'Font-family switch combobox',
      }}
      onChange={(event, value) => handleChange(value)}
    />
  );
};

export default Autocomplete;