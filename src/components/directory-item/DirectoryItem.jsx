import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

function DirectoryItem({ id, title, imageUrl }) {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body" onClick={goToCategory}>
        <h2>{title} </h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
