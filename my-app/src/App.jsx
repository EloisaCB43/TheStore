import { ThemeProvider } from "@mui/system";
import NavBar from "./components/Navbar/NavBar";
import Theme from "./components/theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <NavBar />
      </>
    </ThemeProvider>
  );
};

export default App;
