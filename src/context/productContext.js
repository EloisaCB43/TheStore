import React, { createContext, useEffect, useState } from "react";
import getProduct from "../api/getProduct";

const Context = createContext();

const { Provider } = Context;

const ProductProvider = ({ children }) => {
  const [product, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState(null);

  const loadingCb = () => {
    setLoading(false);
  };
  useEffect(() => {
    if (productId) {
      const fecthOneProduct = async () => {
        // because I am giving in apis two parametres, an idCategory and a finalcallback
        const products = await getProduct(productId, loadingCb);
        setProducts(products);
      };
      fecthOneProduct();
    }
  }, [productId]);

  return (
    <Provider value={{ product, loading, setProductId }}>{children}</Provider>
  );
};

export { ProductProvider, Context };
