import useSearch from "./hooks/useSearch";
import { Header, Input, Container, Phonetic, Meaning } from "./components";
import useSwitchTheme from "./hooks/useSwitchTheme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import useSwitchFontFamily from "./hooks/useSwitchFontFamily";

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
        <Header></Header>
        <Input handleSearch={handleSearch}></Input>

        {data?.map((meaning, index) => (
          <div key={`${meaning.word}-${index}`}>          
            <Phonetic title={meaning.word} phonetics={meaning.phonetics} />
            <Meaning meanings={meaning.meanings}></Meaning>
          </div>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default App;
