import { Typography as TypographyMUI } from "@mui/material";

const Typography = ({ id, variant, text }) => {
  return <TypographyMUI id={id} className={id} variant={variant}>{text}</TypographyMUI>;
};

export default Typography;