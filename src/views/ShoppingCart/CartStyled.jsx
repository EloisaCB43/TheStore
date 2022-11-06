import { styled } from "@mui/system";
import Image from "mui-image";
import { Context } from "../../context/customContext";
import { useContext } from "react";
import ItemCount from "../ItemDetailContainer/itemCount";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  marginTop: "17px",
  [theme.breakpoints.up("laptop")]: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

const ItemTotal = styled("div")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("laptop")]: {
    width: "60%",
  },
}));

const DivContainer = styled("div")(({ theme }) => ({
  display: "flex",
  borderTop: "black solid 0.5px",
  borderBottom: "black solid 0.5px",
  [theme.breakpoints.up("laptop")]: {
    marginTop: "10px",
    height: "168px",
  },
}));

const ItemContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("laptop")]: {
    padding: "10px",
  },
}));
const ButtonRemove = styled("button")(({ theme }) => ({
  [theme.breakpoints.up("laptop")]: {
    fontFamily: theme.palette.primaryText.family,
    marginTop: "10px",
    fontSize: "14px",
    padding: "5px",
    color: "white",
    background: "black",
    width: "55%",
    "&:hover": {
      color: "black",
      background: "white",
    },
  },
}));

const ContainerImg = styled("div")(({ theme }) => ({
  height: "50px",
  width: "22%",
  minWidth: "160px",
  [theme.breakpoints.up("laptop")]: {
    height: "145px",
    width: "22%",
  },
}));
const StyleInfo = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("laptop")]: {
    flex: 1,
    gap: "5px",
  },
  [theme.breakpoints.up("laptop")]: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "35%",
    height: "100%",
    margin: "5px 0px 5px 0px",
  },
}));
const StyleItemsCart = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("laptop")]: {
    flex: 1,
    gap: "10px",
  },
  justifyContent: "space-between",
  [theme.breakpoints.up("laptop")]: {
    width: "100%",
    justifyContent: "space-around",
  },
}));

const Title = styled("h3")(({ theme }) => ({
  [theme.breakpoints.down("laptop")]: {
    flex: 1,
  },
  [theme.breakpoints.up("laptop")]: {
    fontSize: "20px",
  },
}));

const CartStyled = ({ product }) => {
  const { deleteItem, updateItem, addItem } = useContext(Context);

  const onUpdate = (count) => {
    updateItem(product, count);
  };
  return (
    <DivContainer>
      {addItem ? (
        <ItemContainer>
          <ContainerImg>
            <Image
              alt={product.attributes.name}
              src={product.attributes.img.data.attributes.formats.large.url}
            />
          </ContainerImg>
          <StyleItemsCart>
            <StyleInfo>
              <Title>{product.attributes.name}</Title>
              <h5 style={{ fontWeight: "normal" }}>{`SKU: ${product.id}`}</h5>
              <h4>{`$${product.attributes.price}`}</h4>
              <ButtonRemove onClick={() => deleteItem(product.id)}>
                Remove
              </ButtonRemove>
            </StyleInfo>
            <ItemCount
              initial={product.quantity}
              stock={12}
              isCard={true}
              isRight={false}
              onUpdate={onUpdate}
            />
            <h4
              style={{ fontWeight: "normal" }}
            >{`$${product.attributes.price} =`}</h4>
            <h4 style={{ fontWeight: "normal" }}>
              {`$${Math.round(
                product.attributes.price * product.quantity
              ).toFixed(2)}`}
            </h4>
          </StyleItemsCart>
        </ItemContainer>
      ) : (
        <h1>You have no products in your cart</h1>
      )}
    </DivContainer>
  );
};

export { CartStyled, MainContainer, ItemTotal };
