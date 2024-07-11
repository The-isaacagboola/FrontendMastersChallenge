/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cartList, setCartList] = useState([]);

  function checkPresent(product) {
    const index = cartList.findIndex((item) => item.name === product.name);
    if (index !== -1) return true;
    return false;
  }

  function addToCart(product) {
    const copyCartList = [...cartList];

    const index = copyCartList.findIndex((item) => item.name === product.name);

    if (index === -1) {
      copyCartList.push(product);
    }

    setCartList(copyCartList);
  }

  return (
    <GlobalContext.Provider
      value={{ cartList, setCartList, addToCart, checkPresent }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
