import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

/* Icons */
const BurgerMenu = styled(MenuOutlinedIcon)(({ theme }) => ({
  color: theme.icon.icons.color,
  [theme.breakpoints.up("tablet")]: {
    display: "none",
  },
}));

const UserIcon = () => {
  const User = styled(PersonOutlineOutlinedIcon)(({ theme }) => ({
    color: theme.icon.icons.color,
  }));
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("tablet"));

  return matches ? <User /> : null;
};
/*Icons*/

const HeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#F1c3b5",
  width: "100%",
  height: "100px",
  [theme.breakpoints.up("tablet")]: {
    justifyContent: "space-evenly",
  },
}));

const Title = (props) => {
  const StyledTitle = styled("h1")(({ theme }) => ({
    color: theme.palette.primaryText.contrastText,
    fontFamily: theme.palette.primaryText.family,
    fontSize: theme.palette.primaryText.size,
    textAlign: "center",
    width: "50%",
    [theme.breakpoints.up("tablet")]: {
      textAlign: "start",
    },
  }));
  return <StyledTitle>{props.text}</StyledTitle>;
};

/* Components for tablet */

const Navbar = (props) => {
  const StyledNav = styled("nav")(({ theme }) => ({
    fontSize: "17px",
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
  const StyleAnchor = styled("a")(({ theme }) => ({
    textDecoration: theme.anchor.anchors.decoration,
    color: theme.palette.primaryText.contrastText,
    fontFamily: theme.palette.primaryText.family,
  }));

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("tablet"));

  return matches ? (
    <StyleList>
      <StyleAnchor href={props.href}>{props.navName}</StyleAnchor>
    </StyleList>
  ) : null;
};

export { HeaderContainer, Title, BurgerMenu, Navbar, UserIcon, NavAnchor };
