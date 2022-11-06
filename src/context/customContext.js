import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const { Provider } = Context;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setQty(
      cart.reduce((acc, product) => {
        acc += product.quantity;
        return acc;
      }, 0)
    );
    setTotal(
      cart.reduce((acc, product) => {
        acc += product.attributes.price * product.quantity;
        return acc;
      }, 0)
    );
  }, [cart]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const addChangeOnQuantity = cart.map((products) => {
        if (products.id === item.id) {
          products.quantity += quantity;
        }
        return products;
      });
      setCart(addChangeOnQuantity);
    } else {
      // i´m adding a property called quantity to item
      setCart([...cart, { ...item, quantity: quantity }]);
    }

    setTotal(total + item.price * quantity);
  };

  const updateItem = (item, quantity) => {
    const addChangeOnQuantity = cart.map((products) => {
      if (products.id === item.id) {
        products.quantity = quantity;
      }
      return products;
    });
    setCart(addChangeOnQuantity);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
    setQty();
  };

  const deleteItem = (id) => {
    const filterDelete = cart.filter((item) => item.id !== id);
    setCart(filterDelete);
  };

  return (
    <Provider
      value={{
        cart,
        addItem,
        updateItem,
        qty,
        total,
        isInCart,
        clearCart,
        deleteItem,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartProvider, Context };
