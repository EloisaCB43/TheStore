import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { styled } from "@mui/system";

const DivStyleButton = styled("div")(({ theme, isCard, isRight }) => ({
  position: "relative",
  right: isRight && "-57px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("desktop")]: {
    marginTop: !isCard && "30px",
    position: "static",
  },
}));

const Count = styled("h3")(({ theme }) => ({
  fontSize: "15px",
  [theme.breakpoints.up("desktop")]: {
    fontSize: "18px",
  },
}));

const StyleAddButton = styled(AddCircleOutlineIcon)(({ theme }) => ({
  fontSize: "23px",
  [theme.breakpoints.up("desktop")]: {
    fontSize: "30px",
  },
}));
const StyleMinusButton = styled(RemoveCircleOutlineIcon)(({ theme }) => ({
  fontSize: "23px",
  [theme.breakpoints.up("desktop")]: {
    fontSize: "30px",
  },
}));

const ButtonCart = styled("button")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  marginTop: "10px",
  fontSize: "11px",
  padding: "11px",
  color: "white",
  background: "black",
  width: "100%",
  [theme.breakpoints.up("desktop")]: {
    marginTop: "25px",
    fontSize: "14px",
    padding: "19px",
    "&:hover": {
      color: "black",
      background: "white",
    },
  },
}));

const ItemCount = ({
  stock,
  initial,
  onAdd,
  isCard = false,

  onUpdate,
}) => {
  const [count, setCount] = useState(initial);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
      onUpdate(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
      onUpdate(count + 1);
    }
  };

  return (
    <>
      <DivStyleButton isCard={isCard}>
        <IconButton
          aria-label="add to shopping cart"
          onClick={minus}
          style={{ paddingLeft: "0px" }}
        >
          <StyleMinusButton />
        </IconButton>
        <Count>{count}</Count>
        <IconButton aria-label="add to shopping cart" onClick={add}>
          <StyleAddButton />
        </IconButton>
      </DivStyleButton>
      {!isCard && (
        <div>
          <ButtonCart disabled={stock === 0} onClick={() => onAdd(count)}>
            <span>{stock === 0 ? "No stock" : "ADD TO CART"}</span>
          </ButtonCart>
        </div>
      )}
    </>
  );
};

export default ItemCount;
