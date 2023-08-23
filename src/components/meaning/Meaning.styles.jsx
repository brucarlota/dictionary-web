import { styled } from "@mui/material";

const MeaningWrapper = styled('div')(() => ({
  '& .meaning': {
    paddingBottom: '40px',
  },

  '& .meaning__partOfSpeech': {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '1.25em',
    margin: '2.5em 0',

    '& .meaning__text': {
      fontStyle: 'italic',
      fontSize: '1.5em',
      fontWeight: 'normal',
    },
    '& .meaning__divider': {
      display: 'flex',
      flexWrap: 'nowrap',
      width: '100%',
      alignItems: 'center',

      '& hr': {
        width: '100%',
      }
    }
  }, 
  '& .meaning__title-meaning': {
    color: '#757575',
    fontSize: '1.25em', 
  },
  '& .meaning__synonyms': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.625em',

    '& .meaning__title-synonyms': {
      color: '#757575', 
    },

    '& .meaning__synonyms-list': {
      color: '#A445ED',
      fontWeight: 'bold',
    },
  },
  '& .meaning__source': {
    paddingTop: '20px',
    paddingBottom: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.625em',
    color: '#757575',
    fontSize: '14px !important',
  },
  '& .meaning__title-sourceLink': {
    display: 'flex',
    color: '#2D2D2D',
    alignItems: 'center',
    gap: '0.4rem',

    '& .icon': {
      fontSize: '1.25rem',
      display: 'flex',
    }
  },
}));

export default MeaningWrapper;