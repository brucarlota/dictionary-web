import { Autocomplete as AutoCompleteMUI, TextField } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const fonts = [
  { fontFamily: 'Sans' },
  { fontFamily: 'Sans Serif' },
  { fontFamily: 'Mono' },
];

const Autocomplete = ({ id }) => {
  const defaultProps = {
    options: fonts,
    getOptionLabel: (option) => option.fontFamily,
  };

  return <AutoCompleteMUI
  {...defaultProps}
  id="disable-clearable"
  disableClearable
  className={id}
  popupIcon={<KeyboardArrowDownIcon className="Input__popupIcon"></KeyboardArrowDownIcon>}
  defaultValue={fonts[0]}
  renderInput={(params) => (
    <TextField {...params} variant="standard" />
  )}
/>;
};

export default Autocomplete;