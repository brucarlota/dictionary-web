import EmptyState from "../emptyState/EmptyState";
import { Phonetic, Meaning } from "../index";
import DefinitionsWrapper from "./Definitions.styles";

const Definitions = ({ data }) => {
  const message = "Sorry pal, we couldn't find definitions for the word you were looking for.";
  const resolution = "You can try the search again at later time or head to the web instead.";

  if (data && data.length > 0) {
    return (
      data?.map((meaning, index) => (
        <DefinitionsWrapper key={`${meaning.word}-${index}`}>
          <Phonetic title={meaning.word} phonetics={meaning.phonetics} />
          <Meaning meanings={meaning.meanings} source={meaning.sourceUrls}></Meaning>
        </DefinitionsWrapper>
      ))
    );
  }
  return (
    <EmptyState message={message} resolution={resolution}></EmptyState>
  );
};

export default Definitions;