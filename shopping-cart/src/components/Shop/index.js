import React, { useState, useEffect } from "react";

import { PRODUCTS } from "components/constants";
import OrderSummary from "components/OrderSummary";
import Catalog from "components/Catalog";
import { on } from "components/events";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    on("bookAgain", () => {
      setOrder([]);
    });

    on("addToCart", (data) => {
      addToCart(data.detail.id);
    });

    on("removeFromCart", (data) => {
      removeFromCart(data.detail.id);
    });

    on("placeOrder", () => {
      setOrder(cart);
      setCart([]);
    });
  });

  const addToCart = (id) => {
    const isItemAlreadyPresent = cart.find((product) => {
      return product.id === id;
    });

    if (!isItemAlreadyPresent) {
      const newItem = PRODUCTS.find((product) => {
        return product.id === id;
      });

      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => {
      return product.id !== id;
    });
    setCart(updatedCart);
  };

  if (order.length) {
    return <OrderSummary order={order} />;
  } else {
    return <Catalog cart={cart} />;
  }
};

export default Shop;
