import { CartStyled, MainContainer, ItemTotal } from "./CartStyled";
import { Context } from "../../context/customContext";
import { useContext } from "react";
import Form from "./cartForm";

const Cart = () => {
  const { cart, total } = useContext(Context);

  return (
    <MainContainer>
      <Form />
      <ItemTotal>
        {cart.map((product) => (
          <CartStyled key={product.id} product={product}></CartStyled>
        ))}
        <h3 style={{ marginTop: "10px" }}>{`Total: $${Math.round(total).toFixed(
          3
        )} `}</h3>
      </ItemTotal>
    </MainContainer>
  );
};

export default Cart;
