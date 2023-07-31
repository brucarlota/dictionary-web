import useSearch from "./hooks/useSearch";
import { Header, Input, Container, Phonetic, Meaning } from "./components";

const App = () => {
  const { data, request } = useSearch();
  
  const handleSearch = async (value) => {
    await request(value);
  };

  // useEffect(() => {
  //   if (data) {
  //   }
  // }, [data]);

  return (
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
  );
};

export default App;
