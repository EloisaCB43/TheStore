import { ThemeProvider } from "@mui/system";
import BarInfo from "./components/BarInfoContainer/BarInfo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDeatilContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/Navbar/NavBar";
import Theme from "./components/theme";
import Cart from "./views/ShoppingCart/ShoppingCart";
import AboutUs from "./views/AboutUs/About";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <NavBar />
      <BarInfo />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/product/:idProduct" element={<ItemDeatilContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
