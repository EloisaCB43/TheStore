import getProduct from "../../api/getProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import CircularIndeterminate from "../../Spinner";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idProduct } = useParams();
  const loadingCb = () => {
    setLoading(false);
  };
  useEffect(() => {
    if (idProduct) {
      const fecthOneProduct = async () => {
        // because I am giving in apis two parametres, an idCategory and a finalcallback
        const products = await getProduct(idProduct, loadingCb);
        setProducts(products);
      };
      fecthOneProduct();
    }
  }, [idProduct]);

  return loading ? (
    <CircularIndeterminate />
  ) : (
    <ItemDetail products={products} />
  );
};

export default ItemDetailContainer;
