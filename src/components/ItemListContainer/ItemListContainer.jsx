import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CircularIndeterminate from "../Spinner";
// https://fakeapi.platzi.com/doc/products

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-menu-eloisa.herokuapp.com/api/products?populate=img",
          {
            headers: {
              Authorization:
                "Bearer 0353714c8df43b3509e9018da570f487f22b821055011a7163fe2fdccfa8faca198a87065520485bbb7d2c5f7adcbab96cace995bc13b84990fde03f87b171e2813c1afff85c4a499ff687be3a357f5b29fa85068b0567c3d1d72562f6a9719abaad3032e8b43d1725a95330fa3344caa13babc95fa6643588d19a1a22c6362d",
            },
          }
        );

        setProducts(response.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getApiData();
  }, []);

  return loading ? <CircularIndeterminate /> : <ItemList products={products} />;
};

export default ItemListContainer;
