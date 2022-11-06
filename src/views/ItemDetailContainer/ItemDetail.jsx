import ItemStyled from "./ItemStyled";
const ItemDetail = ({ product }) => {
  return (
    <div>
      {product && <ItemStyled key={product.id} product={product}></ItemStyled>}
    </div>
  );
};

export default ItemDetail;
