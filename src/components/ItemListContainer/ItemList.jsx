import { Item, DivContainer } from "./Item";

const ItemList = ({ products }) => {
  return (
    <DivContainer>
      {products.map((product) => (
        <Item key={product.id} products={product}></Item>
      ))}
    </DivContainer>
  );
};

export default ItemList;
