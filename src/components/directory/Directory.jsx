import { useNavigate } from "react-router-dom";
import DirectoryItem from "../directory-item/DirectoryItem";
import directory from "./directory.json";
import { DirectoyContainer } from "./directory.styles";

function Directory() {
  const navigate = useNavigate();

  const navigateToCategory = (categoryTitle) => {
    navigate(`/shop/${categoryTitle.toLowerCase()}`);
  };

  return (
    <DirectoyContainer>
      {directory.map(({ id, title, imageUrl }) => (
        <DirectoryItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          handleClick={() => navigateToCategory(title)}
        />
      ))}
    </DirectoyContainer>
  );
}

export default Directory;
