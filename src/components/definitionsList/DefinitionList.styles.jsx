import { styled } from "@mui/material/styles";

const ListWrapper = styled('ul')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  
  '& li::marker': {
    color: '#A445ED',
  }
}));

export default ListWrapper;