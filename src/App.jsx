import useSearch from "./hooks/useSearch";
import { Header, Input, Container, Phonetic, Meaning } from "./components";
import useSwitchTheme from "./hooks/useSwitchTheme";
import { ThemeProvider, createTheme } from "@mui/material";
import AppWrapper from "./styles/AppWrapper.styles";

const App = () => {
  const { data, request } = useSearch();
  const { theme } = useSwitchTheme();
  
  const handleSearch = async (value) => {
    await request(value);
  };
  
  const themeMode = createTheme({
    palette: {
      mode: theme,
    }
  });

  return (
    <AppWrapper theme={theme} className={theme}>
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
    </AppWrapper>
  );
};

export default App;
