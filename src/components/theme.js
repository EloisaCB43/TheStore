import { createTheme } from "@mui/material";
import { grey, deepOrange } from "@mui/material/colors";

const Theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primaryText: {
      family: "Arvo",
      contrastText: grey[900],
      contrastTextHover: grey[800],
      backgroundColor: deepOrange[50],
      backgroundColorHover: "5px 5px 20px 1px rgba(128,128,128)",
      backgroundInput: "#FFFFFF",
      size: "30px",
    },
  },
  anchor: {
    anchors: {
      outline: "none",
      decoration: "none",
    },
  },
  icon: {
    icons: {
      color: grey[900],
    },
  },
});

export default Theme;
