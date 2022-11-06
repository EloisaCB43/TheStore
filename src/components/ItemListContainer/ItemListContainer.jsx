import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CircularIndeterminate from "../../Spinner";
import { useParams } from "react-router-dom";
import getProducts from "../../api/getProducts";
import getCategoryProducts from "../../api/getCategoryProducts";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  const loadingCb = () => {
    setLoading(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(loadingCb);
      setProducts(products);
    };
    const fetchCategories = async () => {
      // because I am giving in apis two parametres, an idCategory and a finalcallback
      const products = await getCategoryProducts(idCategory, loadingCb);

      setProducts(products);
    };
    idCategory ? fetchCategories() : fetchProducts();
  }, [idCategory]);

  return loading ? <CircularIndeterminate /> : <ItemList products={products} />;
};

export default ItemListContainer;
