import EmptyStateWrapper from "./EmptyState.styles";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { Typography } from "../index";

const EmptyState = ({ message, resolution }) => {
  return (
    <EmptyStateWrapper className="emptyState">
      <SentimentDissatisfiedIcon className="emptyIcon" />
      <Typography id="title" variant="h6" text="No Definitions Found"></Typography>
      <Typography id="text" variant="body2" text={message}></Typography>
      <Typography id="text" variant="body2" text={resolution}></Typography>
    </EmptyStateWrapper>
  );
};

export default EmptyState;
