import useSearch from "./hooks/useSearch";
import { Header, Input, Container } from "./components";
import useSwitchTheme from "./hooks/useSwitchTheme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import useSwitchFontFamily from "./hooks/useSwitchFontFamily";
import Definitions from "./components/definitions/Definitions";

const App = () => {
  const { data, request } = useSearch();
  const { theme } = useSwitchTheme();
  const { fontFamily } = useSwitchFontFamily();
  
  const handleSearch = async (value) => {
    await request(value);
  };

  const themeMode = createTheme({
    palette: {
      mode: theme,
    },
    typography: {
      fontFamily: fontFamily,
    }
  });

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Container>
        <Header />
        <Input handleSearch={handleSearch} />
        {data && <Definitions data={data} />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
