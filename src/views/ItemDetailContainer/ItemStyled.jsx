import { styled } from "@mui/system";
import Image from "mui-image";

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
  return (
    <DivContainer>
      <ContainerImg>
        <Image
          alt={products.attributes.name}
          src={products.attributes.img.data.attributes.formats.large.url}
        />
      </ContainerImg>

      <DescripContainer>
        <DetailTitle>{products.attributes.name}</DetailTitle>
        <DetailDescription>{products.attributes.description}</DetailDescription>
        <DetailPrice>{`$${products.attributes.price}`}</DetailPrice>
      </DescripContainer>
    </DivContainer>
  );
};

export default ItemStyled;
