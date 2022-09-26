import { ThemeProvider } from "@mui/system";
import Header from "./components/header/header";
import Theme from "./components/header/theme";

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
