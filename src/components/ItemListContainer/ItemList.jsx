import { ItemStyled, DivContainer } from "./ItemStyled";

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <DivContainer>
      {products.map((product) => (
        <ItemStyled key={product.id} products={product}></ItemStyled>
      ))}
    </DivContainer>
  );
};

export default ItemList;
