import {
  HeaderContainer,
  Title,
  BurgerMenu,
  NavAnchor,
  Navbar,
} from "./ComponentsStyled";
import SearchBar from "./SearchBar";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import { Context } from "../../context/customContext";
import { useContext } from "react";

const NavBar = () => {
  const { cart } = useContext(Context);

  const categories = [
    { navName: "About Us", href: "/about" },
    { navName: "Pizzas", href: "/category/pizzas" },
    { navName: "Burgers", href: "/category/burgers" },
  ];

  return (
    <HeaderContainer>
      <BurgerMenu />

      <Title text="TheStore" />

      <Navbar>
        {categories.map((category, i) => (
          <NavAnchor key={`navanchor_${i}`} {...category} />
        ))}
      </Navbar>
      <SearchBar placeholder="Search your order Id" data={cart} />
      <UserWidget />
      <CartWidget />
    </HeaderContainer>
  );
};

export default NavBar;
