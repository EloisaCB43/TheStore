import { ThemeProvider } from "@mui/system";
import Header from "./components/Navbar/NavBar";
import Theme from "./components/theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Header />
      </>
    </ThemeProvider>
  );
};

export default App;
