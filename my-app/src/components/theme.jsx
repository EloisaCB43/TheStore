import { createTheme } from "@mui/material";

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
      family: "Abyssinica SIL",
      contrastText: "#100b0e",
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
      color: "#100b0e",
    },
  },
});

export default Theme;
