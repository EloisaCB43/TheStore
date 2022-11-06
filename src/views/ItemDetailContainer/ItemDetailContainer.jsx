import { useContext } from "react";
import ItemDetail from "./ItemDetail";
import CircularIndeterminate from "../../Spinner";
import { Context } from "../../context/productContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const { product, loading, setProductId } = useContext(Context);

  useEffect(() => {
    if (idProduct) {
      setProductId(idProduct);
    }
  }, [idProduct, setProductId]);

  return loading ? <CircularIndeterminate /> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;
