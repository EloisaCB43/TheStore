import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={minus}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
      <h2>{count}</h2>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={add}
      >
        <AddCircleOutlineIcon />
      </IconButton>
      <button disabled={stock === 0} onClick={() => onAdd(count)}>
        <span>{stock === 0 ? "No tenemos stock" : "Agrega al carrito"}</span>
      </button>
    </div>
  );
};

export default ItemCount;
