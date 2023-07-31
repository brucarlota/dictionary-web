import { styled } from "@mui/material/styles";

export const HeaderWrapper = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  padding: '3.5em 0',

  '& .header__logo': {
    width: '32px',
  },
  '& .header__controls': {
    display: 'flex',
  },
}));

export const ControlsWrapper = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',

  '& .header__font': {
    display: 'flex',
    width: '7.5em',
  },
  '& .header__divider': {
    marginLeft: '1.625em',
    marginRight: '1.625em',
  },
  '& .header__themeSelector': {
   display: 'flex',
   marginRight: '1.625em',
  },
  '& .Input__popupIcon': {
    color: '#A445ED',
   },
  '& .header__image-moon': {
    height: '16px',
  }
}));
