import { styled } from "@mui/material/styles";

const ListWrapper = styled('ul')(({ theme }) => ({
  color: '#A445ED',
  
  '& p': {
    color: '#2D2D2D',
  }
}));

export default ListWrapper;