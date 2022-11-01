const CartStyled = ({ product }) => {
  return (
    <>
      <h1>{product.attributes.name}</h1>
      <h3>{product.quantity}</h3>
      <h4>{product.attributes.price}</h4>
      <h5>{product.attributes.price * product.quantity}</h5>
    </>
  );
};

export default CartStyled;
