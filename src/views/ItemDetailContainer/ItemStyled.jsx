import { styled } from "@mui/system";
import Image from "mui-image";
import React, { useState, useContext } from "react";
import ItemCount from "../../components/itemCount";
import { Link } from "react-router-dom";
import { Context } from "../../context/customContext";

const DivContainer = styled("div")(({ theme }) => ({
  display: "flex",
}));
const ContainerImg = styled("div")(({ theme }) => ({
  height: "230px",
  width: "50%",
}));

const DescripContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "70%",
}));

const DetailTitle = styled("h6")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  fontSize: "19px",
}));
const DetailDescription = styled("p")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  fontSize: "19px",
}));
const DetailPrice = styled("p")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  fontSize: "19px",
}));

const ItemStyled = ({ products }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useContext(Context);

  const onAdd = (count) => {
    addItem(products, count);
    setShowItemCount(false);
  };
  return (
    <>
      <DivContainer>
        <ContainerImg>
          <Image
            alt={products.attributes.name}
            src={products.attributes.img.data.attributes.formats.large.url}
          />
        </ContainerImg>

        <DescripContainer>
          <DetailTitle>{products.attributes.name}</DetailTitle>
          <DetailDescription>
            {products.attributes.description}
          </DetailDescription>
          <DetailPrice>{`$${products.attributes.price}`}</DetailPrice>
        </DescripContainer>
      </DivContainer>
      {showItemCount ? (
        <ItemCount initial={1} stock={12} onAdd={onAdd} />
      ) : (
        <Link to={"/cart"}>
          <button>Finalizar</button>
        </Link>
      )}
    </>
  );
};

export default ItemStyled;
