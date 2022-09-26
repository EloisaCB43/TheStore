import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const HeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#F1c3b5",
  width: "100%",
  height: "100px",
  [theme.breakpoints.up("tablet")]: {
    justifyContent: "space-between",
  },
}));

const BurgerMenu = styled(MenuOutlinedIcon)(({ theme }) => ({
  color: theme.icon.icons.color,
  [theme.breakpoints.up("tablet")]: {
    display: "none",
  },
}));

const StyledTitle = styled("h1")(({ theme }) => ({
  color: theme.palette.primaryText.contrastText,
  fontFamily: theme.palette.primaryText.family,
  fontSize: theme.palette.primaryText.size,
  textAlign: "center",
  width: "50%",
  [theme.breakpoints.up("tablet")]: {
    textAlign: "start",
    marginLeft: "20px",
  },
}));
const Title = (props) => {
  return <StyledTitle>{props.text}</StyledTitle>;
};

const ShoppingCart = styled(ShoppingCartOutlinedIcon)(({ theme }) => ({
  color: theme.icon.icons.color,
}));

/* Components for tablet */

const StyledNav = styled("nav")(({ theme }) => ({
  color: theme.palette.primaryText.contrastText,
  fontFamily: theme.palette.primaryText.family,
  fontSize: theme.palette.primaryText.size,
}));

const Navbar = (props) => {
  return (
    <StyledNav>
      <ul>{props.children}</ul>
    </StyledNav>
  );
};

const NavAnchor = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("tablet"));

  return matches ? (
    <li>
      <a href="asdasdkj">{props.navName}</a>
    </li>
  ) : null;
};

export { HeaderContainer, Title, ShoppingCart, BurgerMenu, Navbar, NavAnchor };
