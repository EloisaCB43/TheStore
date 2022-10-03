import { ThemeProvider } from "@mui/system";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import Theme from "./components/theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <NavBar />
        <ItemListContainer />
      </>
    </ThemeProvider>
  );
};

export default App;
