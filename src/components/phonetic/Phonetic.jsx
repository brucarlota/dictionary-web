import PhoneticWrapper from "./Phonetic.styles";
import { PlayButton, Subtitle, Title } from "../../components";

const Phonetic = ({ id, title, phonetics }) => {
  const phoneticWithAudio = phonetics.find((item) => item.audio);

  return <PhoneticWrapper id={id} className={id}>
    <div className="Phonetic__meaning">
      <Title id="Phonetic__title" text={title} />
      <Subtitle id="Phonetic__term" text={phoneticWithAudio?.text}></Subtitle>
    </div>
    {phoneticWithAudio?.audio && <PlayButton id="Phonetic__audio" audioLink={phoneticWithAudio?.audio}></PlayButton>}
  </PhoneticWrapper>;
};

export default Phonetic;