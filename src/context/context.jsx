/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function GlobalContext({ children }) {
  const [cartArray, setCartArray] = useState([]);

  return (
    <CartContext.Provider value={[cartArray, setCartArray]}>
      {children}
    </CartContext.Provider>
  );
}
