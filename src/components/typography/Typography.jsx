import { Typography as TypographyMUI } from "@mui/material";

const Typography = ({ id, variant, text, color }) => {
  return <TypographyMUI id={id} className={id} variant={variant} style={{color: color}}>{text}</TypographyMUI>;
};

export default Typography;