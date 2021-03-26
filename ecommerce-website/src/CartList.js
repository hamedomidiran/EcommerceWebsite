import React from "react";
import { CartItem } from "./CartItem";

export const CartList = (props) => {
  return (
    <React.Fragment>
      {Object.values(props.cart.items).map((item, idx) => (
        <CartItem
          removeFromCart={props.removeFromCart}
          handleQuantityChange={props.handleQuantityChange}
          key={idx}
          item={item}
        />
      ))}
    </React.Fragment>
  );
};
