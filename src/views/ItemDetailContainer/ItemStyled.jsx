const ItemStyled = ({ products }) => {
  return (
    <div>
      <h1>{products.attributes.name}</h1>
      <h2> {`$${products.attributes.price}`}</h2>
    </div>
  );
};

export default ItemStyled;
