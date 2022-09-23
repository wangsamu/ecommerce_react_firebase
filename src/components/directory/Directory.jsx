import React from "react";
import DirectoryItem from "../directory-item/DirectoryItem";
import directory from "./directory.json";
import "./directory.styles.scss";

function Directory() {
  return (
    <div className="directory-container">
      {directory.map(({ id, title, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Directory;
