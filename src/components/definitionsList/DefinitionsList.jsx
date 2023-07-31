import ListWrapper from "./DefinitionList.styles";
import { Typography } from "../../components";

const DefinitionsList = ({ definitions }) => {
  return <ListWrapper>
    {definitions.map((item, index) => (
      <li className={`${item.definition}-${index}`} key={`${item}-${index}`}>
        <Typography variant="body1" text={item.definition} />
      </li>
    ))}
  </ListWrapper>;
};

export default DefinitionsList;