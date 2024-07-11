/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function GlobalContext({ children }) {
  const [cartArray, setCartArray] = useState([]);

  function handleProduct(product) {
    if (cartArray.indexOf(product) !== -1) {
      return;
    } else {
      cartArray.push(product);
      console.log(cartArray);
    }
  }

  return (
    <CartContext.Provider value={[cartArray, setCartArray, handleProduct]}>
      {children}
    </CartContext.Provider>
  );
}
