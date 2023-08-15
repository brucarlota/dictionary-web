import { styled } from "@mui/material/styles";

const AppWrapper = styled('div')(({ theme }) => ({
  background: theme === 'dark' ? "#000" : "#fff",
  height: "100%",
}));

export default AppWrapper;