import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react/cjs/react.production.min";
// import { CategoriesContext } from "../../context/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { selectCategoriesMap } from "../../store/categories/category.selector";

function CategoriesPreview() {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

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
