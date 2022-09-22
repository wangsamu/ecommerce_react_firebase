import React, { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);
  return (
    //   <div className="shop-container">
    //     {Object.keys(categoriesMap).map((title) => {
    //       console.log(title);
    //       const products = categoriesMap[title];
    //       return (
    //         <CategoryPreview key={title} products={products} title={title} />
    //       );
    //     })}
    //   </div>
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
