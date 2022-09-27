import { styled } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = styled(ShoppingCartOutlinedIcon)(({ theme }) => ({
  color: theme.icon.icons.color,
}));

export default CartWidget;