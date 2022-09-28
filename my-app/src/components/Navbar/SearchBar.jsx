import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = (props) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primaryText.backgroundInput, 0.6),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.8),
    },
    marginLeft: theme.spacing(1),
    width: "20%",
    height: "36px",
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
    [theme.breakpoints.up("desktop")]: {
      width: "15%",
      marginRight: "20px",
    },
  }));

  return <Search {...props} />;
};

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.icon.icons.color,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = () => {
  return (
    <SearchInput>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchInput>
  );
};

export default SearchBar;
