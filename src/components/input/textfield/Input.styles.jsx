import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputWrapper = styled(TextField)(({ theme }) => ({
  background: '#F4F4F4',
  border: 'none',
  borderRadius: '16px',
  width: '100% !important',
  margin: '0 0 2.813rem 0 !important',

  '& fieldset': {
    border: 'none',
  },

  '& .Input__searchIcon': {
    color: '#A445ED',
  }
}));

export default InputWrapper;
