import { Typography, Phonetic, Meaning } from "../index";

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
    <div>
      <Typography id="title" variant="h6" text="No Definitions Found"></Typography>
      <Typography id="title" variant="body2" text={message}></Typography>
      <Typography id="title" variant="body2" text={resolution}></Typography>
    </div>
  );
};

export default Definitions;