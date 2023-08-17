import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputWrapper = styled(TextField)(({ theme }) => ({
  border: 'none',
  borderRadius: '16px',
  width: '100% !important',
  margin: '0 0 2.813rem 0 !important',
  background: theme === 'dark' ? '#1F1F1F' : '#F4F4F4',

  '& fieldset': {
    border: 'none',
  },
  '& .Input__searchIcon': {
    color: '#A445ED',
    cursor: 'pointer',
  }
}));

export default InputWrapper;
