import CartWidget from "./CartWidget";
import {
  HeaderContainer,
  Title,
  BurgerMenu,
  NavAnchor,
  Navbar,
  UserIcon,
} from "./ComponentsStyled";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const categories = [
    { navName: "About Us", href: "/about" },
    { navName: "Products", href: "/products" },
    { navName: "New", href: "/new" },
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
      <SearchBar />
      <UserIcon />
      <CartWidget />
    </HeaderContainer>
  );
};

export default NavBar;
