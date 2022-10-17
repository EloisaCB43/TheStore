import * as React from "react";
import MaterialCard from "@mui/material/Card";
import CardContentStyle from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TypographyFont from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const CardContent = styled(CardContentStyle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px",
  margin: "15px 10px -9px 10px;",
  [theme.breakpoints.up("tablet")]: {
    margin: "15px 0 -9px 0;",
  },
  [theme.breakpoints.up("desktop")]: {
    margin: "15px 0 -9px 0;",
  },
}));
const Typography = styled(TypographyFont)(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  margin: "0px",
  fontSize: "17px",
  [theme.breakpoints.up("tablet")]: {
    fontSize: "17px",
  },
  [theme.breakpoints.up("desktop")]: {
    fontSize: "17px",
  },
}));

const Card = styled(MaterialCard)(({ theme }) => ({
  width: "90%",
  margin: "10px 0px 10px 0px",

  "&:hover": {
    boxShadow: theme.palette.primaryText.backgroundColorHover,
  },
  [theme.breakpoints.up("tablet")]: {
    width: "45%",
    padding: "20px",
  },
  [theme.breakpoints.up("desktop")]: {
    width: "30%",
    marginBottom: "20px",
    marginRight: "10px",
  },
}));

const DivContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "Column",
  alignItems: "center",
  [theme.breakpoints.up("tablet")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  [theme.breakpoints.up("desktop")]: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "20px 60px 20px 60px",
  },
}));

const Item = ({ products }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="230px"
        image={products.attributes.img.data.attributes.formats.large.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {products.attributes.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`$${products.attributes.price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          id="button"
          size="small"
          onClick={() => navigate(`/product/${products.id}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export { Item, DivContainer };
