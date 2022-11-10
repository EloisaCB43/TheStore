import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CircularIndeterminate from "../../Spinner";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  const loadingCb = () => {
    setLoading(false);
  };

  useEffect(() => {
    const productCollection = collection(db, "products");

    const getCategoryQuery = (category) =>
      query(productCollection, where("category", "==", category));

    const getData = async () => {
      try {
        const result = await getDocs(
          idCategory ? getCategoryQuery(idCategory) : productCollection
        );

        const listProducts = result.docs.map((item, i) => {
          return { ...item.data(), id: item.id };
        });
        setProducts(listProducts);
      } catch (err) {
        console.log(err);
      } finally {
        loadingCb();
      }
    };
    getData();
  }, [idCategory]);

  return loading ? <CircularIndeterminate /> : <ItemList products={products} />;
};

export default ItemListContainer;
