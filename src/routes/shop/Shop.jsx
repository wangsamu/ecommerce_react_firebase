import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Shop;
