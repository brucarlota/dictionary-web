import Typography from "@mui/material/Typography";

const Title = ({ id, text }) => {
  return <Typography variant="h1" id={id} className={id}>{text}</Typography>;
};

export default Title;