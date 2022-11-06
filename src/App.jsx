import { ThemeProvider } from "@mui/system";
import BarInfo from "./components/BarInfoContainer/BarInfo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/Navbar/NavBar";
import Theme from "./components/theme";
import Cart from "./views/ShoppingCart/ShoppingCart";
import AboutUs from "./views/AboutUs/About";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/customContext";
import { ProductProvider } from "./context/productContext";
import BasicBreadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

const App = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <ThemeProvider theme={Theme}>
          <NavBar />
          <BarInfo />
          <BasicBreadcrumbs />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route
              path="/product/:idProduct"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </ThemeProvider>
      </ProductProvider>
    </CartProvider>
  );
};

export default App;
