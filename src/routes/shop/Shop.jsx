import React, { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoriesContext } from "../../context/CategoriesContext";
import "./shop.styles.scss";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        console.log(title);
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default Shop;
