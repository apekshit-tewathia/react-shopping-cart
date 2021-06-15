import React, { useState } from "react";

import { PRODUCTS } from "components/constants";
import OrderSummary from "components/OrderSummary";
import Catalog from "components/Catalog";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

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

  const placeOrder = () => {
    setOrder(cart);
    setCart([]);
  };

  const bookAgain = () => {
    setOrder([]);
  };

  if (order.length) {
    return <OrderSummary order={order} bookAgainHandler={bookAgain} />;
  } else {
    return (
      <Catalog
        cart={cart}
        addToCartHandler={addToCart}
        removeFromCartHandler={removeFromCart}
        placeOrderHandler={placeOrder}
      />
    );
  }
};

export default Shop;
