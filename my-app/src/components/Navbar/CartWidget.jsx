import { styled, alpha } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = styled(ShoppingCartOutlinedIcon)(({ theme }) => ({
  color: alpha(theme.icon.icons.color, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.6),
    borderRadius: "7px",
  },
  [theme.breakpoints.up("desktop")]: {
    marginRight: "80px",
  },
}));

export default CartWidget;
