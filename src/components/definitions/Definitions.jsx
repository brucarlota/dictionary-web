import EmptyState from "../emptyState/EmptyState";
import { Phonetic, Meaning } from "../index";

const Definitions = ({ data }) => {
  const message = "Sorry pal, we couldn't find definitions for the word you were looking for.";
  const resolution = "You can try the search again at later time or head to the web instead.";

  if (data && data.length > 0) {
    return (
      data?.map((meaning, index) => (
        <div key={`${meaning.word}-${index}`}>          
          <Phonetic title={meaning.word} phonetics={meaning.phonetics} />
          <Meaning meanings={meaning.meanings}></Meaning>
        </div>
      ))
    );
  }
  return (
    <EmptyState message={message} resolution={resolution}></EmptyState>
  );
};

export default Definitions;