import CartWidget from "./CartWidget";
import {
  HeaderContainer,
  Title,
  BurgerMenu,
  NavAnchor,
  Navbar,
  UserIcon,
} from "./Components";

const Header = () => {
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
      <UserIcon />
      <CartWidget />
    </HeaderContainer>
  );
};

export default Header;
