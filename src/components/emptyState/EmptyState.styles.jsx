import { styled } from "@mui/material/styles";

const EmptyStateWrapper = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',

  '& .title': {
    padding: '14px 0',
  },

  '& .emptyIcon': {
    fontSize: '64px',
  },
}));

export default EmptyStateWrapper;