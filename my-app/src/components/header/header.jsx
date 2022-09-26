import {
  HeaderContainer,
  Title,
  ShoppingCart,
  BurgerMenu,
  NavAnchor,
  Navbar,
} from "./components";

const Header = () => {
  return (
    <HeaderContainer>
      <BurgerMenu />
      <Title text="TheStore" />
      <Navbar>
        <NavAnchor navName="About Us" />
        <NavAnchor navName="Products" />
        <NavAnchor navName="New" />
      </Navbar>
      <ShoppingCart />
    </HeaderContainer>
  );
};

export default Header;
