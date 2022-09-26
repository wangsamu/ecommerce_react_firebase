// import { useNavigate } from "react-router-dom";
import {
  DiretoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
} from "./directory-item.styles";

function DirectoryItem({ title, imageUrl, handleClick }) {
  // const navigate = useNavigate();

  // const goToCategory = () => {
  //   navigate(`/shop/${title.toLowerCase()}`);
  // };

  return (
    <DiretoryItemContainer onClick={handleClick}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title} </h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DiretoryItemContainer>
  );
}

export default DirectoryItem;
