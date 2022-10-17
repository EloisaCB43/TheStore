import ItemStyled from "./ItemStyled";
const ItemDetail = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <ItemStyled key={product.id} products={product}></ItemStyled>
      ))}
    </div>
  );
};

export default ItemDetail;
