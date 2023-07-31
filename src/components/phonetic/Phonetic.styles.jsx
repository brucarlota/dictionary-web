import { styled } from "@mui/material/styles";

const PhoneticWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& .Phonetic__title': {
    fontSize: '4em',
    fontWeight: '700',
  },
  '& .Phonetic__term': {
    color: '#A445ED',
  },
  '& .Phonetic__audio': {
    background: 'rgba(164, 69, 237, 0.25)',
    width: '75px',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',

    '& svg': {
      color: '#A445ED',
      width: '32px',
      height: '32px',
    }
  },
}));

export default PhoneticWrapper;