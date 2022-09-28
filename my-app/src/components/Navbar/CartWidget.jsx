import { styled } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = styled(ShoppingCartOutlinedIcon)(({ theme }) => ({
  color: theme.icon.icons.color,
  [theme.breakpoints.up("desktop")]: {
    marginRight: "20px",
  },
}));

export default CartWidget;
