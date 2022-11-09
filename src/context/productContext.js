import React, { createContext, useEffect, useState } from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

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
      const oneProductCollection = collection(db, "products");
      const refDoc = doc(oneProductCollection, productId);

      const fecthOneProduct = async () => {
        const products = await getDoc(refDoc);
        setProducts({ ...products.data(), id: products.id });
        loadingCb();
      };
      fecthOneProduct();
    }
  }, [productId]);

  return (
    <Provider value={{ product, loading, setProductId }}>{children}</Provider>
  );
};

export { ProductProvider, Context };
