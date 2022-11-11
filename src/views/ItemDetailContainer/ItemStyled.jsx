import { styled } from "@mui/system";
import Image from "mui-image";
import React, { useState, useContext } from "react";
import ItemCount from "./itemCount";
import { Link } from "react-router-dom";
import { Context } from "../../context/customContext";

const DivContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("laptop")]: {
    display: "flex",
    marginTop: "25px",
    flexDirection: "row",
  },
}));
const ContainerImg = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "15px",
  marginBottom: "10px",
  alignSelf: "center",

  [theme.breakpoints.up("tablet")]: {
    width: "50%",
  },
  [theme.breakpoints.up("laptop")]: {
    height: "315px",
    width: "45%",
    marginTop: "0px",
  },
}));

const DescripContainer = styled("div")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("laptop")]: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
    width: "70%",
  },
}));

const DetailTitle = styled("h6")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  fontSize: "17px",
  [theme.breakpoints.up("tablet")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("laptop")]: {
    fontSize: "21px",
  },
}));
const DetailDescription = styled("p")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  fontSize: "14px",
  marginTop: "14px",
  lineHeight: "22px",
  [theme.breakpoints.up("tablet")]: {
    fontSize: "16px",
    margin: "14px 0px 11px 0px",
    lineHeight: "25px",
  },
  [theme.breakpoints.up("laptop")]: {
    fontSize: "18px",
    marginTop: "30px",
    lineHeight: "25px",
  },
}));
const DetailPrice = styled("p")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  marginTop: "10px",
  fontSize: "17px",
  fontWeight: "bold",
  position: "absolute",
  [theme.breakpoints.up("laptop")]: {
    fontSize: "21px",
    marginTop: "18px",
    position: "static",
  },
}));

const ViewCartButton = styled("button")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  marginTop: "10px",
  fontSize: "11px",
  padding: "11px",
  color: "white",
  background: "black",
  width: "100%",
  [theme.breakpoints.up("laptop")]: {
    marginTop: "25px",
    fontSize: "14px",
    padding: "19px",
    "&:hover": {
      color: "black",
      background: "white",
    },
  },
}));

const ItemStyled = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem, updateItem } = useContext(Context);

  const onAdd = (count) => {
    addItem(product, count);
    setShowItemCount(false);
  };

  const onUpdate = (count) => {
    updateItem(product, count);
  };
  return (
    <>
      <DivContainer>
        <ContainerImg>
          <Image alt={product.name} src={product.img} />
        </ContainerImg>

        <DescripContainer>
          <DetailTitle>{product.name}</DetailTitle>
          <DetailDescription>{product.description}</DetailDescription>
          <DetailPrice>{`$${product.price}`}</DetailPrice>
          {showItemCount ? (
            <ItemCount
              initial={0}
              stock={product.stock}
              onAdd={onAdd}
              onUpdate={onUpdate}
            />
          ) : (
            <Link to={"/cart"}>
              <ViewCartButton>VIEW CART</ViewCartButton>
            </Link>
          )}
        </DescripContainer>
      </DivContainer>
    </>
  );
};

export default ItemStyled;
