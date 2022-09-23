import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoriesContext } from "../../context/CategoriesContext";
import "./category.styles.scss";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
}

export default Category;
