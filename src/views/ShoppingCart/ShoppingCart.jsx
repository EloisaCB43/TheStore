import CartStyled from "./CartStyled";
import { Context } from "../../context/customContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, total } = useContext(Context);

  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <CartStyled key={product.id} product={product}></CartStyled>
      ))}
      <h1>{total}</h1>
    </div>
  );
};

export default Cart;
