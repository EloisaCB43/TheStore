import React, { useContext } from "react";
import { styled, alpha } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Context } from "../../context/customContext";

const CartWidget = () => {
  const { qty } = useContext(Context);

  const StyledLink = styled(Link)(() => ({
    textDecoration: "none",
  }));
  const ShoppingCart = styled(ShoppingCartOutlinedIcon)(({ theme }) => ({
    color: alpha(theme.icon.icons.color, 0.9),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.6),
      borderRadius: "7px",
    },
    [theme.breakpoints.up("desktop")]: {
      marginRight: "80px",
    },
  }));

  return (
    <>
      {qty > 0 && <p>{qty}</p>}
      <StyledLink to="/cart">
        <ShoppingCart />
      </StyledLink>
    </>
  );
};

export default CartWidget;
