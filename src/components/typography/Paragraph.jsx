import Typography from "@mui/material/Typography";

const Paragraph = ({ id, text }) => {
  return <Typography variant="body" id={id} className={id}>{text}</Typography>;
};

export default Paragraph;