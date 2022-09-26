import React, { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { CategoriesContext } from "../../context/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div>
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
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
