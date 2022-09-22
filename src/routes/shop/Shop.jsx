import React, { useContext } from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { CategoriesContext } from "../../context/CategoriesContext";
import "./shop.styles.scss";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        console.log(title);
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
          // <Fragment key={title}>
          //   <h2>{title}</h2>
          //   <div className="products-container">
          //     {categoriesMap[title].map((product) => (
          //       <ProductCard key={product.id} product={product} />
          //     ))}
          //   </div>
          // </Fragment>
        );
      })}
    </div>
  );
}

export default Shop;
