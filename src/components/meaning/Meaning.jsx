import DefinitionsList from "../definitionsList/DefinitionsList";
import MeaningWrapper from './Meaning.styles';
import { Typography } from '../../components';
import { Divider } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Meaning = ({meanings, source}) => {
  return (
    <MeaningWrapper>
      {meanings.map((meaning, index) => (
        <div className={`meaning ${meaning.partOfSpeech}-${index}`} key={`${meaning.partOfSpeach}-${index}`}>
          
          <div className="meaning__partOfSpeech">
            <Typography id="meaning__text" variant="h3" text={meaning.partOfSpeech} />
            <div className="meaning__divider"><Divider /></div>
          </div>

          <Typography id="meaning__title-meaning" variant="h4" text="Meaning" />
          <DefinitionsList id="definitionsList" definitions={meaning.definitions}></DefinitionsList>
          {!!meaning.synonyms.length && (
            <div className="meaning__synonyms">
              <Typography id="meaning__title-synonyms" variant="body1" text="Synonyms" />
              <Typography id="meaning__synonyms-list" variant="body1" text={meaning.synonyms.join(', ')} />
            </div>
          )}
        </div>
      ))}
      {source && 
        <>
          <Divider />
          <div className="meaning__source">
            <Typography id="meaning__title-source" variant="body1" text="Source" />
            {source?.map((url, index) => (
              <a 
                className="meaning__title-sourceLink" 
                key={`${url}-${index}`} 
                href={`${url}`}
                rel="noreferrer"
                target="_blank">
                  {url}<OpenInNewIcon className="icon" />
                  { index < source.length - 1 && <span>|</span>}
              </a>
            ))}
          </div>
        </>
      }
    </MeaningWrapper>
  );
};

export default Meaning;