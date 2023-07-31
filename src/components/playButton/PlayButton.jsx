import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayButtonWrapper from './PlayButton.styles';

// eslint-disable-next-line react/prop-types
const PlayButton = ({ id, audioLink }) => {
  const audio = new Audio(audioLink);
  
  const handleAudio = () => {
    audio.play();
  };

  return <PlayButtonWrapper id={id} className={id} onClick={handleAudio}><PlayArrowIcon /></PlayButtonWrapper>;
};

export default PlayButton;