import { createContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { addCollectionDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data.js";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
