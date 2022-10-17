import { styled, useTheme, alpha } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, NavLink } from "react-router-dom";

/* Icons */
const BurgerMenu = styled(MenuOutlinedIcon)(({ theme }) => ({
  color: theme.icon.icons.color,
  [theme.breakpoints.up("tablet")]: {
    display: "none",
  },
}));

const HeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: theme.palette.primaryText.backgroundColor,
  width: "100%",
  height: "100px",
  [theme.breakpoints.up("tablet")]: {
    justifyContent: "space-evenly",
  },
}));

const Title = (props) => {
  const StyledLink = styled(Link)(() => ({
    textDecoration: "none",
  }));
  const StyledTitle = styled("h1")(({ theme }) => ({
    color: theme.palette.primaryText.contrastText,
    fontFamily: theme.palette.primaryText.family,
    fontSize: theme.palette.primaryText.size,
    textAlign: "center",
    width: "50%",
    listStyle: "none",
    [theme.breakpoints.up("tablet")]: {
      textAlign: "start",
      width: "10%",
      fontSize: "24px",
    },
    [theme.breakpoints.up("laptop")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("desktop")]: {
      fontSize: "35px",
      width: "15%",
      marginLeft: "53px",
    },
  }));
  return (
    <StyledLink to="/">
      <StyledTitle>{props.text}</StyledTitle>
    </StyledLink>
  );
};

/* Components for tablet */

const Navbar = (props) => {
  const StyledNav = styled("nav")(({ theme }) => ({
    fontSize: "17px",
    [theme.breakpoints.up("tablet")]: {
      width: "40%",
      marginLeft: "40px",
      fontSize: "14px",
    },
    [theme.breakpoints.up("laptop")]: {
      width: "50%",
      marginLeft: "40px",
      fontSize: "15px",
    },
    [theme.breakpoints.up("desktop")]: {
      width: "49%",
      marginLeft: "10px",
      fontSize: "16px",
    },
  }));
  const StyleUl = styled("ul")(({ theme }) => ({
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
  }));
  return (
    <StyledNav>
      <StyleUl>{props.children}</StyleUl>
    </StyledNav>
  );
};

const NavAnchor = (props) => {
  const StyleList = styled("li")(({ theme }) => ({
    marginRight: "20px",
  }));
  const StyleAnchor = styled(NavLink)(({ theme }) => ({
    textDecoration: theme.anchor.anchors.decoration,
    color: alpha(theme.palette.primaryText.contrastText, 0.9),
    "&:hover": {
      color: alpha(theme.palette.primaryText.contrastTextHover, 0.8),
      textDecoration: "underline 1px black",
      textUnderlineOffset: "8px",
    },
    fontFamily: theme.palette.primaryText.family,
  }));

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("tablet"));

  return matches ? (
    <StyleList>
      <StyleAnchor to={props.href}>{props.navName}</StyleAnchor>
    </StyleList>
  ) : null;
};

export { HeaderContainer, Title, BurgerMenu, Navbar, NavAnchor };
