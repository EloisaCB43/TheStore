import axios from "axios";
const URL_API = "https://restaurant-menu-eloisa.herokuapp.com/api/products";

const getProduct = async (idProduct, finallyCallback) => {
  const URL_API_PRODUCT = `${URL_API}/${idProduct}?populate=img`;
  try {
    const response = await axios.get(URL_API_PRODUCT, {
      headers: {
        Authorization:
          "Bearer 0353714c8df43b3509e9018da570f487f22b821055011a7163fe2fdccfa8faca198a87065520485bbb7d2c5f7adcbab96cace995bc13b84990fde03f87b171e2813c1afff85c4a499ff687be3a357f5b29fa85068b0567c3d1d72562f6a9719abaad3032e8b43d1725a95330fa3344caa13babc95fa6643588d19a1a22c6362d",
      },
    });
    return [response.data.data];
  } catch (err) {
    console.log(err);
  } finally {
    finallyCallback();
  }
};

export default getProduct;
