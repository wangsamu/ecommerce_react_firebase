import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DiretoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
} from "./directory-item.styles";

function DirectoryItem({ id, title, imageUrl }) {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <DiretoryItemContainer key={id}>
      <BackgroundImage
        // className="background-image"
        // style={{ backgroundImage: `url(${imageUrl})` }}
        imageUrl={imageUrl}
      />
      <DirectoryItemBody onClick={goToCategory}>
        <h2>{title} </h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DiretoryItemContainer>
  );
}

export default DirectoryItem;
