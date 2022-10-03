import { styled } from "@mui/system";
import Icon from "@mui/material/Icon"; /* Here I used https://fonts.google.com/icons?icon.platform=android with this import*/

const Greeting = (props) => {
  const { greeting } = props;

  const categoriesContainer = [
    { nameList: "Whole wine", iconName: "wine_bar" },
    { nameList: "Carefully sourced", iconName: "eco" },
    { nameList: "Free shipping over $25", iconName: "shopping_cart" },
  ];

  const GreetingStyled = styled("section")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "60px",
    boxShadow: "-1px 7px 8px -6px rgb(0 0 0 / 40%)",
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
  }));
  const Message = styled("nav")(({ theme }) => ({
    color: theme.palette.primaryText.contrastText,
    fontFamily: theme.palette.primaryText.family,

    marginLeft: "10px",
    [theme.breakpoints.up("tablet")]: {
      fontSize: "11px",
    },
    [theme.breakpoints.up("desktop")]: {
      fontSize: "15px",
    },
  }));
  const DivContainer = styled("div")(({ theme }) => ({
    display: "flex",
    width: "25%",
    "&::before": {
      content: "'|'",
      marginRight: "30px",
    },
  }));

  return (
    <GreetingStyled>
      {greeting}
      {categoriesContainer.map((category, i) => (
        <DivContainer>
          <Icon key={`Icon_${i}`}>{category.iconName}</Icon>
          <Message key={`Message_${i}`}>{category.nameList}</Message>
        </DivContainer>
      ))}
    </GreetingStyled>
  );
};

export default Greeting;
