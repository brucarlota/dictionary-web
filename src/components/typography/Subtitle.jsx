import Typography from "@mui/material/Typography";

const Subtitle = ({ id, text }) => {
  return <Typography variant="subtitle1" id={id} className={id}>{text}</Typography>;
};

export default Subtitle;