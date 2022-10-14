import { ThemeProvider } from "@mui/system";
import BarInfo from "./components/BarInfoContainer/BarInfo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import Theme from "./components/theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <NavBar />
      <BarInfo />
      <ItemListContainer />
    </ThemeProvider>
  );
};

export default App;
