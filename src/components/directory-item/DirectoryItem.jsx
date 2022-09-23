import React from "react";
import "./directory-item.styles.scss";

function DirectoryItem({ id, title, imageUrl }) {
  return (
    <div key={id} className="directory-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
