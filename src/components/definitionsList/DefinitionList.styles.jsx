import { styled } from "@mui/material/styles";

const ListWrapper = styled('ul')(() => ({
  '& li::marker': {
    color: '#A445ED',
  }
}));

export default ListWrapper;