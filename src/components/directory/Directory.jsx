import React from "react";
import DirectoryItem from "../directory-item/DirectoryItem";
import directory from "./directory.json";
import { DirectoyContainer } from "./directory.styles";

function Directory() {
  return (
    <DirectoyContainer>
      {directory.map(({ id, title, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </DirectoyContainer>
  );
}

export default Directory;
