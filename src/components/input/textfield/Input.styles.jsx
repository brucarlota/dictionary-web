import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputWrapper = styled(TextField)(({ params }) => ({
  border: params.error ? '1px solid red' : 'none',
  borderRadius: '16px',
  width: '100% !important',
  margin: '0 !important',
  background: params.theme === 'dark' ? '#1F1F1F' : '#F4F4F4',

  '& .Mui-focused': {
    border: '1px solid #A445ED',
    borderRadius: '16px',
  },

  '& fieldset': {
    border: 'none',
  },
  '& .Input__searchIcon': {
    color: '#A445ED',
    cursor: 'pointer',
  }
}));

export default InputWrapper;
