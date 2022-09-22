import React, { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { CategoriesContext } from "../../context/CategoriesContext";
// import "./categories-preview.styles.scss";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);
  return (
    <div className="categories-preview-container">
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          console.log(title);
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })}
      </Fragment>
    </div>
  );
}

export default CategoriesPreview;
