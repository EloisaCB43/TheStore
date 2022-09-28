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
      family: "Arvo,Roboto Serif",
      contrastText: grey[900],
      backgroundColor: deepOrange[50],
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
